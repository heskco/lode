/**
 * Generates a PDF from the Lode landing page.
 *
 * Usage:
 *   node scripts/generate-pdf.js [url]
 *
 * If no URL is provided, it builds the project and starts a production server,
 * captures the page as PDF, then shuts down.
 *
 * Examples:
 *   node scripts/generate-pdf.js                        # auto-builds and serves
 *   node scripts/generate-pdf.js http://localhost:3000  # use running server
 *   node scripts/generate-pdf.js https://your-domain.com
 */

const puppeteer = require('puppeteer');
const { spawn, execSync } = require('child_process');
const path = require('path');
const http = require('http');

const OUTPUT_FILE = path.join(__dirname, '..', 'lode-landing.pdf');
const PORT = 3001;
const URL = `http://localhost:${PORT}`;
const PROJECT_DIR = path.join(__dirname, '..');

async function waitForServer(url, timeoutMs = 60000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    await new Promise((r) => setTimeout(r, 500));
    try {
      await new Promise((resolve, reject) => {
        const req = http.get(url, (res) => resolve(res));
        req.on('error', reject);
        req.setTimeout(1000, () => req.destroy());
      });
      return;
    } catch {
      // not ready yet
    }
  }
  throw new Error(`Server at ${url} did not start within ${timeoutMs}ms`);
}

async function generatePDF(targetUrl) {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();

    // Full desktop viewport so the layout renders correctly
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

    console.log(`Navigating to ${targetUrl} ...`);
    await page.goto(targetUrl, { waitUntil: 'networkidle0', timeout: 60000 });

    // Let any remaining animations/lazy images settle
    await new Promise((r) => setTimeout(r, 2000));

    console.log('Generating PDF...');
    await page.pdf({
      path: OUTPUT_FILE,
      format: 'A4',
      printBackground: true,
      margin: { top: '0', right: '0', bottom: '0', left: '0' },
      scale: 0.75,
    });

    console.log(`\nPDF saved to: ${OUTPUT_FILE}`);
  } finally {
    await browser.close();
  }
}

async function main() {
  const targetUrl = process.argv[2];

  if (targetUrl) {
    await generatePDF(targetUrl);
    return;
  }

  // Build first so next start works correctly
  console.log('Building Next.js project...');
  execSync('npx next build', {
    cwd: PROJECT_DIR,
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'production' },
  });

  console.log(`Starting production server on port ${PORT}...`);
  const server = spawn('npx', ['next', 'start', '--port', String(PORT)], {
    cwd: PROJECT_DIR,
    stdio: 'pipe',
    env: { ...process.env, NODE_ENV: 'production' },
  });

  server.stdout.on('data', (d) => process.stdout.write(d));
  server.stderr.on('data', (d) => process.stderr.write(d));

  try {
    console.log('Waiting for server...');
    await waitForServer(URL);
    console.log('Server is up.');
    await generatePDF(URL);
  } finally {
    console.log('Shutting down server...');
    server.kill();
    await new Promise((r) => setTimeout(r, 1000));
  }
}

main().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});

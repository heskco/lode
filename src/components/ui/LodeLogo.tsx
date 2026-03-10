/**
 * LODE Logo Component
 * Uses official LODE brand logos from Brand Guidelines Lite 2026
 */

import React from 'react';
import Image from 'next/image';

interface LodeLogoProps {
  variant?: 'full' | 'mark';
  theme?: 'light' | 'dark';
  size?: 'small' | 'medium' | 'large' | 'sm' | 'md' | 'lg' | number;
  animated?: boolean;
  className?: string;
}

export const LodeLogo: React.FC<LodeLogoProps> = ({
  variant = 'full',
  theme = 'light',
  size = 'md',
  animated = false,
  className = '',
}) => {
  // Normalize size (handle both short and long forms)
  const normalizeSize = (s: typeof size): 'sm' | 'md' | 'lg' | number => {
    if (typeof s === 'number') return s;
    if (s === 'small') return 'sm';
    if (s === 'medium') return 'md';
    if (s === 'large') return 'lg';
    return s as 'sm' | 'md' | 'lg';
  };

  const normalizedSize = normalizeSize(size);

  // Size mapping for full logo
  const fullLogoSizes = {
    sm: { width: 100, height: 40 },
    md: { width: 150, height: 60 },
    lg: { width: 200, height: 80 },
  };

  // Size mapping for logomark
  const logomarkSizes = {
    sm: 32,
    md: 48,
    lg: 64,
  };

  // Determine logo path based on variant and theme
  const getLogoPath = () => {
    if (variant === 'mark') {
      // Logomark: Blue for light theme, Orange for dark theme (per brand guidelines)
      return theme === 'light'
        ? '/logos/Logomark/LODE_Logomark_Blue.svg'
        : '/logos/Logomark/LODE_Logomark_Orange.svg';
    } else {
      // Full logo: Blue:Orange for light theme, White:Orange for dark theme
      return theme === 'light'
        ? '/logos/Logo/Without Background/LODE_Blue:Orange.svg'
        : '/logos/Logo/Without Background/LODE_White:Orange.svg';
    }
  };

  const logoPath = getLogoPath();

  if (variant === 'mark') {
    const markSize = typeof normalizedSize === 'number' ? normalizedSize : logomarkSizes[normalizedSize];

    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <Image
          src={logoPath}
          alt="LODE"
          width={markSize}
          height={markSize}
          className={animated ? 'animate-spin' : ''}
          style={animated ? { animationDuration: '2s' } : undefined}
          priority
        />
      </div>
    );
  }

  // Full logo
  const dimensions =
    typeof normalizedSize === 'number'
      ? { width: normalizedSize, height: normalizedSize * 0.4 } // Maintain aspect ratio
      : fullLogoSizes[normalizedSize];

  return (
    <div className={`inline-flex items-center ${className}`}>
      <Image
        src={logoPath}
        alt="LODE"
        width={dimensions.width}
        height={dimensions.height}
        priority
      />
    </div>
  );
};

/**
 * Loading Spinner using LODE logomark
 */
export const LodeSpinner: React.FC<{
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
}> = ({ size = 'md', theme = 'light' }) => {
  return <LodeLogo variant="mark" size={size} theme={theme} animated />;
};

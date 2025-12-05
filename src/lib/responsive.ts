/**
 * Responsive Design Utilities
 * 
 * Breakpoint system following Tailwind CSS defaults:
 * - Mobile: < 640px (default)
 * - SM: ≥ 640px
 * - MD: ≥ 768px
 * - LG: ≥ 1024px
 * - XL: ≥ 1280px
 * - 2XL: ≥ 1536px
 */

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

/**
 * Media query strings for use in styled-components or other CSS-in-JS solutions
 */
export const mediaQueries = {
  sm: `@media (min-width: ${BREAKPOINTS.sm}px)`,
  md: `@media (min-width: ${BREAKPOINTS.md}px)`,
  lg: `@media (min-width: ${BREAKPOINTS.lg}px)`,
  xl: `@media (min-width: ${BREAKPOINTS.xl}px)`,
  '2xl': `@media (min-width: ${BREAKPOINTS['2xl']}px)`,
  mobile: `@media (max-width: ${BREAKPOINTS.sm - 1}px)`,
  tablet: `@media (min-width: ${BREAKPOINTS.sm}px) and (max-width: ${BREAKPOINTS.lg - 1}px)`,
  desktop: `@media (min-width: ${BREAKPOINTS.lg}px)`,
} as const;

/**
 * Hook to check current breakpoint (client-side only)
 */
export const useBreakpoint = () => {
  if (typeof window === 'undefined') return 'mobile';
  
  const width = window.innerWidth;
  
  if (width >= BREAKPOINTS['2xl']) return '2xl';
  if (width >= BREAKPOINTS.xl) return 'xl';
  if (width >= BREAKPOINTS.lg) return 'lg';
  if (width >= BREAKPOINTS.md) return 'md';
  if (width >= BREAKPOINTS.sm) return 'sm';
  return 'mobile';
};

/**
 * Responsive container padding values
 */
export const containerPadding = {
  mobile: 'px-4',      // 16px
  sm: 'sm:px-6',       // 24px
  md: 'md:px-8',       // 32px
  lg: 'lg:px-10',      // 40px
  xl: 'xl:px-6',       // 24px (with max-w-[1280px])
} as const;

/**
 * Get responsive container classes
 */
export const getContainerClasses = (maxWidth: string = '1280px') => {
  return `w-full max-w-[${maxWidth}] mx-auto px-4 sm:px-6 lg:px-6`;
};

/**
 * Responsive typography scale
 */
export const typography = {
  h1: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
  h2: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
  h3: 'text-xl sm:text-2xl md:text-3xl',
  h4: 'text-lg sm:text-xl md:text-2xl',
  body: 'text-sm sm:text-base lg:text-lg',
  small: 'text-xs sm:text-sm',
} as const;

/**
 * Responsive spacing scale
 */
export const spacing = {
  section: 'py-12 sm:py-16 md:py-20 lg:py-24',
  sectionSmall: 'py-8 sm:py-12 md:py-16',
  card: 'p-4 sm:p-6 lg:p-8',
  cardSmall: 'p-3 sm:p-4 lg:p-6',
} as const;











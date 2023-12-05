export const isMobile = (): boolean => window.innerWidth <= 768;

export const isTablet = (): boolean =>
  window.innerWidth >= 767 && window.innerWidth < 1024;

export const isDesktop = (): boolean => window.innerWidth >= 1024;

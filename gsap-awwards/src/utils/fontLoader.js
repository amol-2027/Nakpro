/**
 * Utility function to ensure fonts are loaded before executing GSAP SplitText operations
 * @param {Function} callback - Function to execute after fonts are loaded
 * @param {number} fallbackDelay - Fallback delay in milliseconds (default: 1000)
 */
export const ensureFontsLoaded = (callback, fallbackDelay = 1000) => {
  if (document.fonts && document.fonts.ready) {
    // Modern browsers with Font Loading API
    document.fonts.ready.then(() => {
      callback();
    });
  } else {
    // Fallback for older browsers
    setTimeout(() => {
      callback();
    }, fallbackDelay);
  }
};

/**
 * Check if fonts are currently loading
 * @returns {boolean}
 */
export const areFontsLoading = () => {
  if (document.fonts && document.fonts.ready) {
    return document.fonts.status === "loading";
  }
  return false;
};

/**
 * Wait for specific font to load
 * @param {string} fontFamily - Font family name
 * @param {Function} callback - Function to execute after font loads
 */
export const waitForFont = (fontFamily, callback) => {
  if (document.fonts && document.fonts.check) {
    if (document.fonts.check(`12px "${fontFamily}"`)) {
      callback();
    } else {
      // Poll for font loading
      const checkFont = () => {
        if (document.fonts.check(`12px "${fontFamily}"`)) {
          callback();
        } else {
          setTimeout(checkFont, 100);
        }
      };
      checkFont();
    }
  } else {
    // Fallback
    setTimeout(callback, 500);
  }
};

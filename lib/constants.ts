// lib/constants.ts

// Import type for configuration
import type { Config } from './types';

/
 * Business constants and configuration for luxury FashionTV cosmetics
 * These constants are used throughout the application to ensure consistency
 */
export const BRAND_NAME = "luxury FashionTV cosmetics";

export const COLORS = {
  primary: "pink",
  secondary: "white",
};

/
 * Configuration object for the luxury FashionTV cosmetics application
 * Includes branding, styling, and default settings
 */
export const CONFIG: Config = {
  brandName: BRAND_NAME,
  colors: COLORS,
  industry: "fashion",
  style: "luxury",
  theme: {
    background: COLORS.secondary,
    primaryText: COLORS.primary,
    secondaryText: COLORS.secondary,
  },
  features: {
    elegantDesign: true,
    highEndFeel: true,
  },
};

export default CONFIG;

// lib/utils.ts

/
 * Utility functions for luxury FashionTV cosmetics application
 * 
 * This module provides utility functions that are tailored for the luxury FashionTV cosmetics brand.
 * It includes functions for class name manipulation and data formatting which are essential for
 * maintaining the brand's luxury aesthetic and ensuring data consistency across the application.
 */

export type ClassName = string | undefined | false | null;

/
 * Concatenates class names into a single string, filtering out falsy values.
 * This is useful for dynamically applying TailwindCSS classes in JSX components.
 * 
 * @param classes - An array of class names, which can be strings or falsy values.
 * @returns A string of concatenated class names.
 */
export function cn(...classes: ClassName[]): string {
  return classes.filter(Boolean).join(' ');
}

/
 * Formats price values to a luxury fashion standard, ensuring consistency in display.
 * 
 * @param value - The price value to be formatted, expected to be a number.
 * @returns A string representing the formatted price prefixed by the currency symbol.
 */
export function formatPrice(value: number): string {
  return $${value.toFixed(2)};
}

/
 * Formats product names to meet luxury FashionTV cosmetics branding guidelines.
 * Ensures all product names are capitalized, reflecting the high-end nature of the brand.
 * 
 * @param name - The product name string to be formatted.
 * @returns A capitalized string.
 */
export function formatProductName(name: string): string {
  return name.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

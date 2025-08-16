// types/index.ts

/
 * This file contains TypeScript types and interfaces for the luxury FashionTV cosmetics
 * application, tailored to the fashion industry with a focus on luxury and elegance.
 */

export type ColorScheme = 'pink' | 'white';

/
 * Represents an individual cosmetic product offered by luxury FashionTV cosmetics.
 */
export interface CosmeticProduct {
  / Unique identifier for the product */
  id: string;
  / The name of the cosmetic product */
  name: string;
  / Description that highlights the luxury and fashion-forward aspects of the product */
  description: string;
  / Price of the product, reflecting its high-end market position */
  price: number;
  / Main image URL showcasing the product in an elegant style */
  imageUrl: string;
  / Available color variants of the product */
  availableColors: ColorScheme[];
  / Indicates if the product is a limited edition item */
  isLimitedEdition: boolean;
}

/
 * Represents a collection or category of products in the luxury FashionTV cosmetics lineup.
 */
export interface ProductCategory {
  / Unique identifier for the category */
  id: string;
  / The name of the product category, emphasizing fashion trends */
  name: string;
  / A brief overview of what the category entails, focusing on luxury and exclusivity */
  description: string;
  / List of products within this category */
  products: CosmeticProduct[];
}

/
 * Represents a promotional offer available on the luxury FashionTV cosmetics website.
 */
export interface Promotion {
  / Unique identifier for the promotion */
  id: string;
  / Title of the promotion, highlighting its appeal and luxury aspect */
  title: string;
  / Detailed description of the promotion */
  description: string;
  / Discount percentage offered by the promotion */
  discountPercentage: number;
  / Start date of the promotional offer */
  startDate: Date;
  / End date of the promotional offer */
  endDate: Date;
  / Applicable product categories for the promotion */
  applicableCategories: string[];
}

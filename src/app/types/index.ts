/**
 * Type definitions for style and image data used in the Lookbook frontend application.
 */

/**
 * Represents an image associated with a hairstyle.
 */
export interface ImageType {
  id: number;
  image: string;
  image_alt: string;
  style: number;
  type: string;
  view: string;
}

/**
 * Represents a complete hairstyle with all associated metadata.
 */

export interface HairstyleType {
  client_permission: boolean;
  created_at: string;
  description: string;
  id: number;
  length: string;
  maintenance: string;
  style_image: ImageType[];
  stylist_name: string;
  tags: string[];
  texture: string;
  thickness: string;
  title: string;
  updated_at: string;
}

/**
 * Interface for image information used in galleries.
 */
export interface ImageInfo {
  images: ImageType[];
  title: string;
}

import { useRef } from "react";
import { createPortal } from "react-dom";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import { Thumbnails } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { ImageInfo } from "../types";

/**
 * A style gallery component that displays a lightbox gallery of images.
 * @param handleLightbox - Function to toggle the lightbox visibility.
 * @param showLightbox - Boolean indicating whether the lightbox is currently shown.
 * @param imageInfo - An object containing images and title for the gallery.
 * @returns A JSX element representing the StyleGallery component.
 */

interface StyleGalleryProps {
  handleLightbox: () => void;
  showLightbox: boolean;
  imageInfo: ImageInfo;
}

const StyleGallery = ({
  handleLightbox,
  showLightbox,
  imageInfo,
}: StyleGalleryProps) => {
  const captionsRef = useRef(null);
  const thumbnailsRef = useRef(null);
  return createPortal(
    <Lightbox
      open={showLightbox}
      close={handleLightbox}
      plugins={[Captions, Thumbnails]}
      captions={{ ref: captionsRef }}
      styles={{ container: { backgroundColor: "rgba(20,20,20, 1)" } }}
      carousel={{ finite: true }}
      controller={{
        closeOnBackdropClick: true,
      }}
      thumbnails={{ ref: thumbnailsRef }}
      slides={imageInfo.images.map((img) => {
        return {
          title: imageInfo.title,
          description: img.image_alt,
          imageFit: "contain",
          src: img.image,
          alt: img.image_alt,
          width: 3840,
          height: 2560,
        };
      })}
    />,
    document.body
  );
};

export { StyleGallery };

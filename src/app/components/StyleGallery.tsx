import { useRef } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import { imageType } from "./StyleResults";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";

const StyleGallery = ({
  handleLightbox,
  showLightbox,
  images,
}: {
  handleLightbox: () => void;
  showLightbox: boolean;
  images: imageType[];
}) => {
  const captionsRef = useRef(null);
  console.log("images,", images);
  return (
    <Lightbox
      open={showLightbox}
      close={() => handleLightbox()}
      plugins={[Captions, Counter]}
      captions={{ ref: captionsRef }}
      counter={{ container: { style: { top: "unset", bottom: 0 } } }}
      slides={images.map((img) => {
        return {
          title: "Slide title",
          description: img.image_alt,
          imageFit: "contain",
          src: img.image,
          alt: img.image_alt,
          width: 3840,
          height: 2560,
        };
      })}
    />
  );
};

export { StyleGallery };

import css from "./ImageGallery.module.css";

import ImageCard from "../ImageCard/ImageCard";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

export default function ImageGallery({ images, openModal }) {
  return (
    <ul className={css.imageGallery}>
      {images.map((imageCard) => (
        <li key={imageCard.id} onClick={() => openModal(imageCard)}>
          <ImageCard imageItem={imageCard} />
        </li>
      ))}
    </ul>
  );
}

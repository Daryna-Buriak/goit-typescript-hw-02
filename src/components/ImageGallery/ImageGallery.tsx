import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { UnsplashImage } from "../../types/unsplash";

interface ImageGalleryProps {
  images: UnsplashImage[];
  openModal: (image: UnsplashImage) => void;
}

export default function ImageGallery({ images, openModal }: ImageGalleryProps) {
  return (
    <ul className={css.imageGallery}>
      {images.map((imageCard: UnsplashImage) => (
        <li key={imageCard.id} onClick={() => openModal(imageCard)}>
          <ImageCard imageItem={imageCard} />
        </li>
      ))}
    </ul>
  );
}

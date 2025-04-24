import css from "./ImageCard.module.css";
import { UnsplashImage } from "../../types/unsplash";

export default function ImageCard({ imageItem }: { imageItem: UnsplashImage }) {
  return (
    <div>
      <img src={imageItem.urls.small} alt={imageItem.alt_description} />
    </div>
  );
}

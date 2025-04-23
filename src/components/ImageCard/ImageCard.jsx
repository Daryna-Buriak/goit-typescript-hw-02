import css from "./ImageCard.module.css";

export default function ImageCard({ imageItem }) {
  return (
    <div>
      <img src={imageItem.urls.small} alt={imageItem.alt_description} />
    </div>
  );
}

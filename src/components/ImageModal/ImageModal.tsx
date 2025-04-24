import css from "./ImageModal.module.css";
import Modal from "react-modal";
import React from "react";
import { UnsplashImage } from "../../types/unsplash";

Modal.setAppElement("#root");

interface ImageModalProps {
  photo: UnsplashImage | null;
  onClose: () => void;
}

export default function ImageModal({ onClose, photo }: ImageModalProps) {
  const isOpen = Boolean(photo);
  return (
    <Modal
      className={css.modal}
      overlayClassName={`${css.overlay} ${isOpen ? css.overlayIsOpen : ""}`}
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
    >
      {photo && (
        <>
          <button className={css.modalCloseButton} onClick={onClose}>
            X
          </button>
          <img
            className={css.modalImage}
            src={photo.urls.regular}
            alt={photo.alt_description}
          />
          <p className={css.text}>Likes: {photo.likes}</p>
          <p className={css.text}>Description: {photo.alt_description}</p>
          <p className={css.text}>Author: {photo.user.name}</p>
        </>
      )}
    </Modal>
  );
}

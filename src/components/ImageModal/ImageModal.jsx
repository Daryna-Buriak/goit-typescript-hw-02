import css from "./ImageModal.module.css";
import Modal from "react-modal";
import React from "react";

Modal.setAppElement("#root");

export default function ImageModal({ onClose, photo }) {
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
            alt={photo.description}
          />
          <p className={css.text}>Likes: {photo.likes}</p>
          <p className={css.text}>Description: {photo.description}</p>
          <p className={css.text}>Author: {photo.user.name}</p>
        </>
      )}
    </Modal>
  );
}

import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalStyled } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onCloseImage, largeImageURL }) => {
  useEffect(() => {
    const handleCloseImageEscape = e => {
      if (e.code === 'Escape') {
        onCloseImage();
      }
    };
    window.addEventListener('keydown', handleCloseImageEscape);
    return () => {
      window.removeEventListener('keydown', handleCloseImageEscape);
    };
  }, [onCloseImage]);

  const handleCloseImageMouse = e => {
    if (e.currentTarget === e.target) {
      onCloseImage();
    }
  };

  return createPortal(
    <Overlay onClick={handleCloseImageMouse}>
      <ModalStyled>
        <img src={largeImageURL} alt="" />
      </ModalStyled>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  OnCloseImage: PropTypes.func.isRequired,
};

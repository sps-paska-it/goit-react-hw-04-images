import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalStyled } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ OnCloseImage, largeImageURL }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleCloseImageEscape);
    return () => {
      window.removeEventListener('keydown', handleCloseImageEscape);
    };
  }, []);

  const handleCloseImageEscape = e => {
    if (e.code === 'Escape') {
      OnCloseImage();
    }
  };

  const handleCloseImageMouse = e => {
    if (e.currentTarget === e.target) {
      OnCloseImage();
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

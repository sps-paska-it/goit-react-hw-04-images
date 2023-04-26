import React from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalStyled } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseImageEscape);
  }
  handleCloseImageEscape = e => {
    if (e.code === 'Escape') {
      this.props.OnCloseImage();
    }
  };
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseImageEscape);
  }

  handleCloseImageMouse = e => {
    if (e.currentTarget === e.target) {
      this.props.OnCloseImage();
    }
  };
  render() {
    const { largeImageURL } = this.props;
    return createPortal(
      <Overlay onClick={this.handleCloseImageMouse}>
        <ModalStyled>
          <img src={largeImageURL} alt="" />
        </ModalStyled>
      </Overlay>,
      modalRoot
    );
  }
}

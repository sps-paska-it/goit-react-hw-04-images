import React from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalStyled } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseImage);
  }

  handleCloseImage = e => {
    if (e.code === 'Escape') {
      this.props.OnCloseImage(e);
    }
    if (e.currentTarget === e.target) {
      this.props.OnCloseImage(e);
    }
  };
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseImage);
  }
  render() {
    const { largeImageURL } = this.props;
    return createPortal(
      <Overlay onClick={this.handleCloseImage}>
        <ModalStyled>
          <img src={largeImageURL} alt="" />
        </ModalStyled>
      </Overlay>,
      modalRoot
    );
  }
}

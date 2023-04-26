import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Modal } from 'components/Modal';
import { GalleryList } from './ImageGallery.styled';

export class ImageGallery extends React.Component {
  state = {
    idLargePhoto: '',
  };
  onOpenLargePhoto = e => {
    this.setState({ idLargePhoto: e.currentTarget.id });
  };
  OnCloseImage = () => {
    this.setState({ idLargePhoto: '' });
  };

  render() {
    const { idLargePhoto } = this.state;
    return (
      <GalleryList>
        {this.props.images.map(obj => {
          return (
            <>
              <ImageGalleryItem
                key={obj.id}
                id={obj.id}
                webformatURL={obj.webformatURL}
                onOpenLargePhoto={this.onOpenLargePhoto}
              />
              {idLargePhoto === String(obj.id) && (
                <Modal
                  largeImageURL={obj.largeImageURL}
                  OnCloseImage={this.OnCloseImage}
                />
              )}
            </>
          );
        })}
      </GalleryList>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

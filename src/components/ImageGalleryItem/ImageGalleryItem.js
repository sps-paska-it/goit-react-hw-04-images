import React from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, onOpenLargePhoto, webformatURL }) => {
  return (
    <GalleryItem id={id} onClick={onOpenLargePhoto}>
      <Image src={webformatURL} alt="" loading="lazy" />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  onOpenLargePhoto: PropTypes.func.isRequired,
};

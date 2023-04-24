import React from 'react';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, onOpenLargePhoto, webformatURL }) => {
  return (
    <GalleryItem id={id} onClick={onOpenLargePhoto}>
      <Image src={webformatURL} alt="" loading="lazy" />
    </GalleryItem>
  );
};

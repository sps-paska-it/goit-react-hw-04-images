import React from 'react';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends React.Component {
  render() {
    const { id, onOpenLargePhoto, webformatURL } = this.props;
    return (
      <GalleryItem id={id} onClick={onOpenLargePhoto}>
        <Image src={webformatURL} alt="" />
      </GalleryItem>
    );
  }
}

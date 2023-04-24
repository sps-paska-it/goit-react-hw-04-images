import React from 'react';
import { GalleryItem, Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends React.Component {
  render() {
    const { id, onOpenLargePhoto } = this.props;
    return (
      <GalleryItem id={id} onClick={onOpenLargePhoto}>
        <Image src={this.props.webformatURL} alt="" />
      </GalleryItem>
    );
  }
}

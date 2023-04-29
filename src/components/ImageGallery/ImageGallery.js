import { useState } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Modal } from 'components/Modal';
import { GalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  const [idLargePhoto, setIdLargePhoto] = useState('');

  return (
    <GalleryList>
      {images.map(obj => {
        return (
          <>
            <ImageGalleryItem
              key={obj.id}
              id={obj.id}
              webformatURL={obj.webformatURL}
              onOpenLargePhoto={e => setIdLargePhoto(e.currentTarget.id)}
            />
            {idLargePhoto === String(obj.id) && (
              <Modal
                largeImageURL={obj.largeImageURL}
                OnCloseImage={e => setIdLargePhoto('')}
              />
            )}
          </>
        );
      })}
    </GalleryList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

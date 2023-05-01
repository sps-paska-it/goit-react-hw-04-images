import { useState, useEffect } from 'react';
import { fetchGallery } from 'api/gallery';
import { ImageGallery } from 'components/ImageGallery';
import { Searchbar } from 'components/Searchbar';
import { Button } from 'components/Button';
import { Loader } from 'components/Loader';
import { Text } from 'components/Text/Text.styled';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [showBtn, setShowBtn] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setEmpty] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    setIsLoading(true);
    fetchGallery(query, page)
      .then(data => {
        if (!data.hits.length) {
          setEmpty(true);
          return;
        }
        setImages(prevState => [...prevState, ...data.hits]);
        setShowBtn(page < Math.ceil(data.totalHits / 12));
      })
      .catch(err => setError(err.message))
      .finally(setIsLoading(false));
  }, [query, page]);

  const handleSubmit = value => {
    if (value === query) return;
    setQuery(value);
    setImages([]);
    setShowBtn(false);
    setEmpty(false);
    setPage(1);
    setError('');
    return query;
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      {isLoading && <Loader />}
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery images={images} />
      {showBtn && <Button loadMore={loadMore} />}

      {error && <Text textAlign="center">{error}</Text>}
      {isEmpty && (
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      )}
    </>
  );
};

import React from 'react';
import { fetchGallery } from 'api/gallery';
import { ImageGallery } from 'components/ImageGallery';
import { Searchbar } from 'components/Searchbar';
import { Button } from 'components/Button';
import { Loader } from 'components/Loader';
import { AppStyled } from './App.styled';

export class App extends React.Component {
  state = {
    query: '',
    images: [],
    showBtn: false,
    page: 1,
    isLoading: false,
  };

  componentDidUpdate(props, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });
      fetchGallery(query, page)
        .then(data => {
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
            showBtn: page < Math.ceil(data.totalHits / 12),
          }));
        })
        .finally(this.setState({ isLoading: false }));
    }
  }

  handleSubmit = query => {
    this.setState({ query, images: [], showBtn: false });
  };

  loadMore = page => {
    this.setState({ page });
  };

  render() {
    const { images, page, showBtn, isLoading } = this.state;
    return (
      <AppStyled>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
        {showBtn && <Button page={page} loadMore={this.loadMore} />}
        {isLoading && <Loader />}
      </AppStyled>
    );
  }
}

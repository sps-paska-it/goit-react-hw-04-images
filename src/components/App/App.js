import React from 'react';
import { fetchGallery } from 'api/gallery';
import { ImageGallery } from 'components/ImageGallery';
import { Searchbar } from 'components/Searchbar';
import { Button } from 'components/Button';
import { Loader } from 'components/Loader';
import { Text } from 'components/Text/Text.styled';

export class App extends React.Component {
  state = {
    query: '',
    images: [],
    showBtn: false,
    page: 1,
    isLoading: false,
    isEmpty: false,
    error: null,
  };

  componentDidUpdate(props, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });
      fetchGallery(query, page)
        .then(data => {
          if (!data.hits.length) {
            this.setState({ isEmpty: true });
            return;
          }
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
            showBtn: page < Math.ceil(data.totalHits / 12),
          }));
        })
        .catch(err => {
          this.setState({ error: err.message });
        })
        .finally(this.setState({ isLoading: false }));
    }
  }

  handleSubmit = query => {
    this.setState({
      query,
      images: [],
      showBtn: false,
      isEmpty: false,
      page: 1,
      error: '',
    });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, showBtn, isLoading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
        {showBtn && <Button loadMore={this.loadMore} />}
        {isLoading && <Loader />}

        {this.state.error && <Text textAlign="center">{this.state.error}</Text>}
        {this.state.isEmpty && (
          <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        )}
      </>
    );
  }
}

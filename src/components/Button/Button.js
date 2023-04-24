import React from 'react';
import { ButtonLoadMore } from './Button.styled';

export class Button extends React.Component {
  loadMore = () => {
    const page = this.props.page + 1;
    this.props.loadMore(page);
  };
  render() {
    return (
      <ButtonLoadMore type="button" onClick={this.loadMore}>
        Load more
      </ButtonLoadMore>
    );
  }
}

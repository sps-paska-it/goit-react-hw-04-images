import React from 'react';
import {
  SearchbarStyled,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
import { ReactComponent as Search } from 'icons/search.svg';

export class Searchbar extends React.Component {
  state = {
    query: '',
  };

  onChange = e => {
    this.setState({ query: e.target.value.trim() });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };
  render() {
    return (
      <SearchbarStyled>
        <SearchForm onSubmit={this.handleOnSubmit}>
          <SearchFormButton type="submit">
            <Search width="25" />
          </SearchFormButton>
          <SearchFormInput
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            onChange={this.onChange}
            value={this.state.query}
          />
        </SearchForm>
      </SearchbarStyled>
    );
  }
}

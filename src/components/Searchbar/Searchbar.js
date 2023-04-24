import React from 'react';
import {
  SearchbarStyled,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
import { FiSearch } from 'react-icons/fi';

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
            <FiSearch size="25px" />
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

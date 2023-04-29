import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchbarStyled,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
import { FiSearch } from 'react-icons/fi';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onChange = e => {
    setQuery(e.target.value.trim());
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };
  return (
    <SearchbarStyled>
      <SearchForm onSubmit={handleOnSubmit}>
        <SearchFormButton type="submit">
          <FiSearch size="25px" />
        </SearchFormButton>
        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onChange}
          value={query}
        />
      </SearchForm>
    </SearchbarStyled>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

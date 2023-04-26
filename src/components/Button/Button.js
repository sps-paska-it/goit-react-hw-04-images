import { ButtonLoadMore } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ loadMore }) => {
  return (
    <ButtonLoadMore type="button" onClick={loadMore}>
      Load more
    </ButtonLoadMore>
  );
};

Button.propType = {
  loadMore: PropTypes.func.isRequired,
};

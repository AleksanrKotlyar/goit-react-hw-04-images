import { LoadMoreBtn } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ handleLoadMore }) => {
  return (
    <LoadMoreBtn type="button" onClick={handleLoadMore}>
      Load more
    </LoadMoreBtn>
  );
};

Button.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};

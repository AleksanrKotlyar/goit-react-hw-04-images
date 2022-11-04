import { LoadMoreBtn } from './Button.styled';

export const Button = ({ handleLoadMore }) => {
  // const onClick = () => {
  //   handleLoadMore();
  // };

  return (
    <LoadMoreBtn type="button" onClick={handleLoadMore}>
      Load more
    </LoadMoreBtn>
  );
};

import { FcSearch } from 'react-icons/fc';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
import toast, { Toaster } from 'react-hot-toast';

export const Searchbar = ({ onSubmit }) => {
  const handleOnSubmit = e => {
    e.preventDefault();

    const query = e.currentTarget.elements.input.value;

    if (query.trim() === '') {
      return toast('Enter a request.', {
        duration: 1000,
        position: 'top-right',
        style: { 'background-color': 'red' },
      });
    }
    onSubmit(query);
    e.currentTarget.reset();
  };

  return (
    <Header>
      <SearchForm onSubmit={handleOnSubmit}>
        <SearchFormButton type="submit">
          <FcSearch />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>
        <Toaster />
        <SearchFormInput
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};

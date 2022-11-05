import { FcSearch } from 'react-icons/fc';
import { Component } from 'react';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
import toast, { Toaster } from 'react-hot-toast';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleOnChange = ({ target: { value } }) => {
    this.setState({ query: value });
  };

  handleOnSubmit = e => {
    e.preventDefault();

    const query = e.currentTarget.elements.input.value;

    if (query.trim() === '') {
      return toast('Enter a request.', {
        duration: 1000,
        position: 'top-right',
        style: { 'background-color': 'yellow' },
      });
    }

    this.props.onSubmit(query);
    // e.currentTarget.reset();
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleOnSubmit}>
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
            value={this.state.query}
            onChange={this.handleOnChange}
          />
        </SearchForm>
      </Header>
    );
  }
}

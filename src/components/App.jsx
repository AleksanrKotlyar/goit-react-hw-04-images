import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import * as API from './Api/Api';
import { ImageGalleryList } from './ImageGallery/ImageGallery';
import { Wrapper } from './App.styled';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Idle, Rejected, ResolvedNoData } from './Notifications/Notifications';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    gallery: [],
    status: 'idle',
    error: null,
    largeImageURL: null,
    tags: null,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query) {
      this.setState({ gallery: [] });
    }
    if (prevState.page !== page || prevState.query !== query) {
      try {
        const gallery = await API.getQuery(query, page);
        if (gallery) {
          this.setState(prevState => ({
            gallery: [...prevState.gallery, ...gallery],
            status: 'resolved',
          }));
        }
      } catch (error) {
        this.setState({
          error,
          status: 'rejected',
        });
      }
    }
  }

  onSubmit = async query => {
    this.setState({ query, page: 1, status: 'pending' });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  getUrlForModal = (url, tags) => {
    this.setState({
      largeImageURL: url,
      tags,
    });
  };

  removeUrlForModal = () => {
    this.setState({
      largeImageURL: null,
      tags: null,
    });
  };

  render() {
    const { gallery, status, largeImageURL, tags, query } = this.state;
    return (
      <Wrapper>
        {largeImageURL && (
          <Modal
            url={largeImageURL}
            tags={tags}
            removeUrlForModal={this.removeUrlForModal}
          />
        )}
        <Searchbar onSubmit={this.onSubmit} />
        {status === 'idle' && <Idle />}
        {status === 'idle' && <Loader />}
        {status === 'rejected' && <Rejected />}
        {status === 'resolved' && gallery.length === 0 && (
          <ResolvedNoData query={query} />
        )}
        {status === 'resolved' && gallery.length > 0 && (
          <>
            <ImageGalleryList
              data={gallery}
              getUrlForModal={this.getUrlForModal}
            />
            <Button handleLoadMore={this.handleLoadMore} />
          </>
        )}
      </Wrapper>
    );
  }
}

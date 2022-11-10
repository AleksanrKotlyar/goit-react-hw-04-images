import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import * as API from '../Api/Api';
import { ImageGalleryList } from './ImageGallery/ImageGallery';
import { Wrapper } from './App.styled';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Idle, Rejected, ResolvedNoData } from './Notifications/Notifications';

export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState('1');
  const [gallery, setGallery] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [largeImageURL, setLargeImageURL] = useState(null);
  const [tags, setTags] = useState(null);
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    if (query) {
      async function fetchData() {
        try {
          const gallery = await API.getQuery(query, page);

          if (gallery) {
            setGallery(prevState =>
              page === 1 ? gallery.hits : [...prevState, ...gallery.hits]
            );
            setTotalHits(
              page === 1
                ? gallery.totalHits - gallery.hits.length
                : gallery.totalHits - [...gallery, ...gallery.hits].length
            );
            setStatus('resolved');
          }
        } catch (error) {
          setError(error);
          setStatus('rejected');
        } finally {
          setStatus('resolved');
        }
      }
      fetchData();
    }
  }, [page, query]);

  const onSubmit = async query => {
    setQuery(query);
    setPage(1);
    setStatus('pending');
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const getUrlForModal = (url, tags) => {
    setLargeImageURL(url);
    setTags(tags);
  };

  const removeUrlForModal = () => {
    setLargeImageURL(null);
    setTags(null);
  };

  return (
    <Wrapper>
      {largeImageURL && (
        <Modal
          url={largeImageURL}
          tags={tags}
          removeUrlForModal={removeUrlForModal}
        />
      )}
      <Searchbar onSubmit={onSubmit} />
      {status === 'idle' && <Idle />}
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <Rejected error={error} />}
      {status === 'resolved' && gallery.length === 0 && (
        <ResolvedNoData query={query} />
      )}
      {status === 'resolved' && gallery.length > 0 && (
        <>
          <ImageGalleryList data={gallery} getUrlForModal={getUrlForModal} />
        </>
      )}
      {!!totalHits && <Button handleLoadMore={handleLoadMore} />}
    </Wrapper>
  );
};

import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { MyContext } from 'components/App';

export const ImageGalleryItem = ({
  inf: { webformatURL, tags, largeImageURL },
}) => {
  const contextValue = useContext(MyContext);

  return (
    <GalleryItem>
      <GalleryItemImage
        src={webformatURL}
        alt={tags}
        onClick={() => contextValue(largeImageURL, tags)}
      />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  inf: PropTypes.object.isRequired,
};

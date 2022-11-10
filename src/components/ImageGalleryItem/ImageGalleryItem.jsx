import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  inf: { webformatURL, tags, largeImageURL },
  getUrlForModal,
}) => {
  return (
    <GalleryItem>
      <GalleryItemImage
        src={webformatURL}
        alt={tags}
        onClick={() => getUrlForModal(largeImageURL, tags)}
      />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  inf: PropTypes.object.isRequired,
  getUrlForModal: PropTypes.func.isRequired,
};

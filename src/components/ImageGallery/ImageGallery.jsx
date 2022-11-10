import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGallery } from './ImageGallery.styled';

export const ImageGalleryList = ({ data, getUrlForModal }) => {
  return (
    <ImageGallery>
      {data.map(item => (
        <ImageGalleryItem
          key={item.id}
          inf={item}
          getUrlForModal={getUrlForModal}
        />
      ))}
    </ImageGallery>
  );
};

ImageGalleryList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  getUrlForModal: PropTypes.func.isRequired,
};

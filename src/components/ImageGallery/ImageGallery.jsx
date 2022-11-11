import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGallery } from './ImageGallery.styled';

export const ImageGalleryList = ({ data }) => {
  return (
    <ImageGallery>
      {data.map(item => (
        <ImageGalleryItem key={item.id} inf={item} />
      ))}
    </ImageGallery>
  );
};

ImageGalleryList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

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

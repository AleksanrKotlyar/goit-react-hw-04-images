import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

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

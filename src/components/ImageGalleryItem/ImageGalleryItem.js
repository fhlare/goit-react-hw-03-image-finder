import { GalleryItem, ImageGallery } from "./ImageGalleryItem.style";


export const ImageGalleryItem = ({image, largeImg }) => {
  return (
    <GalleryItem>
      <ImageGallery src={image} alt="" />
    </GalleryItem>
  ); 
};
import React from 'react';
import ImageCard from './ImageCard';

interface Props {
  images: Array<{
    imageUrl: string;
    title: string;
    description: string;
    created: string; 
  }>;
}

const ImageGallery: React.FC<Props> = ({ images }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          // we assume unique titles, keeping index if this turns out to be false
          <ImageCard
            key={`${image.title}-${image.created}`}
            imageUrl={image.imageUrl}
            title={image.title}
            description={image.description}
          />
        ))}
      </div>
    );
  };
export default ImageGallery;

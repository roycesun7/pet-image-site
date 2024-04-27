import React, { useState } from 'react';
import ImageCard from './ImageCard';
import { downloadImages } from './imageDownloader';

interface Image {
  imageUrl: string;
  title: string;
  description: string;
  created: string;
}

interface Props {
  images: Image[];
}

const ImageGallery: React.FC<Props> = ({ images }) => {
  const [selectedImages, setSelectedImages] = useState<Set<string>>(new Set());

  const handleSelectImage = (title: string) => {
    setSelectedImages((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(title)) {
        newSelected.delete(title);
      } else {
        newSelected.add(title);
      }
      return newSelected;
    });
  };

  const handleSelectAll = () => {
    setSelectedImages(new Set(images.map(image => image.title)));
  };

  const handleDeselectAll = () => {
    setSelectedImages(new Set());
  };

  const handleDownloadSelected = async () => {
    const imageUrlsToDownload = images
      .filter((image) => selectedImages.has(image.title))
      .map((image) => image.imageUrl);
    await downloadImages(imageUrlsToDownload);
  };

  return (
    <div>
      <div className="flex justify-between my-4 px-64">
        <button 
          onClick={handleSelectAll} 
          className="bg-green-500 hover:bg-green-700 text-white text-sm font-bold py-2 px-4 rounded"
        >
          Select All
        </button>
        <button 
          onClick={handleDeselectAll} 
          className="bg-red-500 hover:bg-red-700 text-white text-sm font-bold py-2 px-4 rounded"
        >
          Deselect All
        </button>
        <button 
          onClick={handleDownloadSelected} 
          className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
        >
          Download Selected
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <ImageCard
            key={`${image.title}-${image.created}`}
            imageUrl={image.imageUrl}
            title={image.title}
            description={image.description}
            created={image.created}
            isSelected={selectedImages.has(image.title)} 
            onSelect={() => handleSelectImage(image.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

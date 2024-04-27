import React, { useState, useEffect } from 'react';
import ImageGallery from '../gallery/ImageGallery';
import Navbar from '../common/Navbar';
import SearchBar from '../gallery/SearchBar';
import SortButton from '../gallery/SortButton';
import useFetchPets from '../../hooks/useFetchPets';

interface Image {
  imageUrl: string;
  title: string;
  description: string;
  created: string;
}

const HomePage = () => {
  const { data: images, loading, error } = useFetchPets('https://eulerity-hackathon.appspot.com/pets');
  const [filteredImages, setFilteredImages] = useState<Image[]>([]); 
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  //fetching images
  useEffect(() => {
    setFilteredImages(images);
  }, [images]);

  //searching and sorting
  useEffect(() => {
    let updatedImages = searchTerm
      ? images.filter(image =>
          image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          image.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : images;

    // Sorting the updatedImages array
    updatedImages = updatedImages.sort((a, b) => {
      const nameA = a.title.toLowerCase();
      const nameB = b.title.toLowerCase();
      return sortOrder === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });

    setFilteredImages(updatedImages);
  }, [searchTerm, sortOrder, images]);

  const handleSearch = (query: string) => {
    setSearchTerm(query);
  };

  const handleSort = (order: 'asc' | 'desc') => {
    setSortOrder(order);
  };

  if (loading) return <p>Loading.......</p>;
  if (error) return <p>Error loading images........</p>;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="pt-16 bg-slate-900 flex flex-col w-screen min-h-screen justify-center">
        <SearchBar onSearch={handleSearch} />
        <SortButton onSort={handleSort} />
        <ImageGallery images={filteredImages} />
      </div>
    </div>
  );
};

export default HomePage;
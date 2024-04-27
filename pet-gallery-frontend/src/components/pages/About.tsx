import React from 'react';
import Navbar from '../common/Navbar';

const AboutPage = () => {
  return (
    <div className="bg-stone-900 flex flex-col w-screen min-h-screen justify-center">
      <Navbar />
      <div className="flex-grow flex flex-col justify-center items-center p-4 w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">About Us</h1>
        <p className="text-center">This is a gallery of our favorite pets.</p>
      </div>
    </div>
  );
};

export default AboutPage;

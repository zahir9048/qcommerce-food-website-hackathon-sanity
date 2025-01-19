"use client";
import { useState } from 'react';

interface ImageGalleryProps {
  mainImageUrl: string; // Ensure this is a string (URL)
  images: string[];     // Ensure this is an array of strings (URLs)
}

const ImageGallery = ({ mainImageUrl, images }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(mainImageUrl);

  return (
    <div className="flex flex-col sm:flex-row items-start gap-[15px]">
      

      {/* Thumbnails */}
      <div className="flex w-full sm:w-[unset] justify-evenly flex-wrap sm:justify-start sm:flex-col items-start h-[100%] gap-y-[15px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-20 h-20 m-0 p-0 relative cursor-pointer ${
              selectedImage === image ? 'border-2 border-blue-500' : ''
            }`}
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        ))}
      </div>


      {/* Main Image */}
      <div className="w-full max-w-lg h-96 relative m-0">
        <img
          src={selectedImage}
          alt="Main Product Image"
          className="rounded-lg w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
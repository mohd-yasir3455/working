import React, { useState } from 'react';

const VideoCard = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const videoId = 'Yr6SKJB5PLc'; // Extracted from the YouTube link

  return (
    <div className="flex items-center justify-between px-4 py-8 max-w-screen-xl mx-auto">
      {/* Left Side: Video Section */}
      <div className="flex-1 mr-4">
        <div className="relative">
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="Video Thumbnail"
            className="w-full h-64 object-cover rounded-lg group hover:opacity-80 transition-opacity duration-300"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={handleOpen}
              className="bg-gray-800 bg-opacity-50 text-white p-4 rounded-full shadow-lg hover:bg-opacity-75 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12l-6 4V8l6 4z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Right Side: Text Section */}
      <div className="flex-1 ml-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Know about the SHG</h3>
        <p className="text-sm text-gray-600 mb-6">
        Become a member of BEES Foundation and work in education while ensuring security for yourself and your family.
        </p>

        {/* Textbox Container with Shadow and Border Radius */}
       
      </div>

      {/* Modal for Video Player */}
      {open && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
          onClick={handleClose}
        >
          <div className="relative w-11/12 md:w-4/5 lg:w-3/5 xl:w-2/5 rounded-lg bg-black">
            <iframe
              className="w-full h-96 rounded-lg"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Video Modal"
            />
            <button
              className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-600"
              onClick={handleClose}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCard;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules'; // Import Autoplay module
import img1 from '../Components/images/other1.jpg';

export default function Other() {
  return (
    <div className="mx-4 mb-4">
      <Swiper
        modules={[Autoplay]} // Use Autoplay module
        spaceBetween={16} // Space between slides
        slidesPerView={1} // Default: 1 slide per view
        autoplay={{
          delay: 3000, // 3 seconds
          disableOnInteraction: false, // Continue autoplay after interaction
        }}
        loop={true}
        breakpoints={{
          768: { slidesPerView: 2 }, // Show 2 slides for medium screens (e.g., tablets)
          1024: { slidesPerView: 3 }, // Show 3 slides for large screens (e.g., desktops)
        }}
        className="w-full"
      >
        {/* Card 1 */}
        <SwiperSlide>
          <div className="flex items-start gap-4 max-w-sm mx-auto">
            <img
              src={img1}
              alt="Card 1"
              className="w-40 h-40 rounded-lg object-cover"
            />
            <div>
              <h3 className="text-lg font-medium text-gray-900">Title 1</h3>
              <p className="mt-0.5 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Card 2 */}
        <SwiperSlide>
          <div className="flex items-start gap-4 max-w-sm mx-auto">
            <img
              src={img1}
              alt="Card 2"
              className="w-40 h-40 rounded-lg object-cover"
            />
            <div>
              <h3 className="text-lg font-medium text-gray-900">Title 2</h3>
              <p className="mt-0.5 text-gray-700">
                Voluptates voluptas distinctio nesciunt quas non animi.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Card 3 */}
        <SwiperSlide>
          <div className="flex items-start gap-4 max-w-sm mx-auto">
            <img
              src={img1}
              alt="Card 3"
              className="w-40 h-40 rounded-lg object-cover"
            />
            <div>
              <h3 className="text-lg font-medium text-gray-900">Title 3</h3>
              <p className="mt-0.5 text-gray-700">
                Distinctio nesciunt quas non animi laborum incidunt.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

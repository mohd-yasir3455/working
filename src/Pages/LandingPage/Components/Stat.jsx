import React from 'react';
import { useTheme } from '@mui/material/styles';

const Stat = () => {
  const theme = useTheme(); // Access the theme colors

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
  <div className="mx-auto max-w-3xl text-center">
    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">BEES Foundation</h2>

    <p className=" text-gray-500 sm:text-xl">
    Reforming and Promoting Education

    </p>
  </div>

  <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
    <div className="flex flex-col rounded-lg bg-orange-50 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Total Members</dt>

      <dd className="text-4xl font-extrabold text-orange-600 md:text-5xl">1000+</dd>
    </div>

    <div className="flex flex-col rounded-lg bg-orange-50 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Years of experience
</dt>

      <dd className="text-4xl font-extrabold text-orange-600 md:text-5xl">7+</dd>
    </div>

    <div className="flex flex-col rounded-lg bg-orange-50 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Projects</dt>

      <dd className="text-4xl font-extrabold text-orange-600 md:text-5xl">4</dd>
    </div>

    <div className="flex flex-col rounded-lg bg-orange-50 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">States</dt>

      <dd className="text-4xl font-extrabold text-orange-600 md:text-5xl">4</dd>
    </div>
  </dl>
</div>

  );
};

export default Stat;

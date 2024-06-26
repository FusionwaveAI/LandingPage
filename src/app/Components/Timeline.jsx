"use client"


import React, { useState } from 'react';

export const Timeline = () => {

  const timelineItems = [
    {
      title: "Flowbite Library v1.0.0",
      releaseDate: "Released on December 2, 2021",
      description: "Get started with dozens of web components and interactive elements."
    },
    {
      title: "Flowbite Library v1.2.0",
      releaseDate: "Released on December 23, 2021",
      description: "Get started with dozens of web components and interactive elements."
    },
    {
      title: "Flowbite Library v1.3.0",
      releaseDate: "Released on January 5, 2022",
      description: "Get started with dozens of web components and interactive elements."
    },
    {
      title: "Flowbite Library v1.3.0",
      releaseDate: "Released on January 5, 2022",
      description: "Get started with dozens of web components and interactive elements."
    },
    {
      title: "Flowbite Library v1.3.0",
      releaseDate: "Released on January 5, 2022",
      description: "Get started with dozens of web components and interactive elements."
    },
    {
      title: "Flowbite Library v1.3.0",
      releaseDate: "Released on January 5, 2022",
      description: "Get started with dozens of web components and interactive elements."
    },
    {
      title: "Flowbite Library v1.3.0",
      releaseDate: "Released on January 5, 2022",
      description: "Get started with dozens of web components and interactive elements."
    },
   
  ];

  const [showMore, setShowMore] = useState(false);

  
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const visibleItems = showMore ? timelineItems : timelineItems.slice(0, 5);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
     
      {visibleItems.map((item, index) => (
        <div key={index} className="relative mb-6">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
              </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.releaseDate}</time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">{item.description}</p>
          </div>
        </div>
      ))}
  
      {!showMore && timelineItems.length > 5 && (
        <div className="col-span-full flex justify-center">
          <button className="text-blue-500 dark:text-blue-400 hover:underline" onClick={toggleShowMore}>Show More</button>
        </div>
      )}
    </div>
  );
};

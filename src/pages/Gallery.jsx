import React from 'react'
import { GALLERY_IMAGES } from '../constants/images';
import { cld } from '../lib/cdn';

const Gallery = () => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl mb-6">Gallery</h1>

      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2'>
        {GALLERY_IMAGES.map(id => (
          <img
            key={id}
            src={cld(id, 320)}                         /* default */
            srcSet={`
              ${cld(id,320)} 320w,
              ${cld(id,640)} 640w,
              ${cld(id,1280)} 1280w,
              ${cld(id,1920)} 1920w
            `}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            className="aspect-square object-cover cursor-zoom-in"
            alt=""
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery
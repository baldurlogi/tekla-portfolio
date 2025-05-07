import React from 'react'
import { Link } from 'react-router-dom'
import { BRIDAL_IMAGES } from '../constants/images'
import { cld } from '../lib/cdn'

const Bridal = () => {
  const directions = ['Top', 'Right', 'Bottom', 'Left'];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Gallery Grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 mb-20 space-y-4">
        {BRIDAL_IMAGES.map((id, index) => {
          const direction = directions[index % directions.length]; // cycles through directions
          return (
            <img
              key={id}
              src={cld(id, 640)}
              srcSet={`
                ${cld(id, 320)} 320w,
                ${cld(id, 640)} 640w,
                ${cld(id, 1280)} 1280w
              `}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              alt="Bridal makeup by Tekla"
              className="w-full object-cover rounded-md shadow-md hover:shadow-lg opacity-0"
              style={{
                animation: `fadeInFrom${direction} 0.8s ease-out forwards`,
                animationDelay: `${index * 0.2}s`
              }}
              loading="lazy"
            />
          );
        })}
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h1 className="text-3xl md:text-4xl font-serif italic tracking-wide">
          Looking for a makeup artist for your special day?
        </h1>

        <p className="text-lg text-neutral-700 leading-relaxed">
          It would be my honour to be a part of your day, send me a message to find out
          what's included in my bridal package &lt;3 whether it's only you or if you're
          wishing to spoil your mom or bridal party as well!
          <br /><br />
          My most important job is to make you feel like the absolute best version of
          yourself ... and guarantee that it will stay that way all day and night long!
        </p>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="inline-block px-8 py-3 bg-neutral-800 text-white rounded-md
                     uppercase tracking-wider hover:bg-neutral-700 transition-colors
                     mt-8"
        >
          Book Your Bridal Consultation
        </Link>
      </div>
    </div>
  )
}

export default Bridal
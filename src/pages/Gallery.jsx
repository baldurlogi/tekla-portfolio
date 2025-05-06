import React from 'react'
import { PROJECTS } from '../constants/images';
import { cld } from '../lib/cdn';
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 py-16">
      <h1 className="text-3xl md:text-4xl uppercase tracking-widest mb-12 text-center">Projects</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {PROJECTS.map(project => (
          <article key={project.id} className="group">
            <Link to={`/gallery/${project.id}`}>
              <img
                src={cld(project.coverImage, 1280)}
                srcSet={`
                  ${cld(project.coverImage, 640)} 640w,
                  ${cld(project.coverImage, 1280)} 1280w,
                  ${cld(project.coverImage, 1920)} 1920w,
                `}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                alt={`${project.title} project`}
                className="w-full aspect-[4/5] object-cover rounded-md shadow-lg hover:shadow-xl hover:opacity-80 transition-shadow"
                loading="lazy"
              />
              <h2 className="mt-4 text-xl tracking-widest text-center">
                {project.title}
              </h2>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Gallery
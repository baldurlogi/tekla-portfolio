import React from 'react'
import { PROJECTS } from '../constants/images';
import { cld } from '../lib/cdn';
import { useParams, useNavigate } from 'react-router-dom';

const ProjectGallery = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === projectId);
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl uppercase tracking-widest mb-8">{project.title}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {project.images.map(imageId => (
          <img
            key={imageId}
            src={cld(imageId, 640)}
            srcSet={`${cld(imageId, 320)} 320w, ${cld(imageId, 640)} 640w`}
            sizes="(max-width: 768px) 50vw, 33vw"
            alt=""
            className="w-full aspect-square object-cover rounded-md"
          />
        ))}
      </div>
      <h3>Photographer </h3>
    </div>
  );
};

export default ProjectGallery;
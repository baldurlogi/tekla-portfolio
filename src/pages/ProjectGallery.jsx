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
      <div className="columns-2 lg:columns-3 gap-4 mb-20 space-y-4">
        {project.images.map(imageId => (
          <img
            key={imageId}
            src={cld(imageId, 640)}
            srcSet={`${cld(imageId, 320)} 320w, ${cld(imageId, 640)} 640w`}
            sizes="(max-width: 768px) 50vw, 33vw"
            alt=""
            className="w-full object-cover rounded-md"
          />
        ))}
      </div>
      <div className='mt-8'>
        <h3 className="text-2xl"><strong>Photographer</strong> @{project.photographer}</h3>
        <h3 className="text-2xl"><strong>Model</strong> @{project.model}</h3>
        <h3 className="text-2xl"><strong>HMUA</strong> @{project.hmua}</h3>
      </div>
    </div>
  );
};

export default ProjectGallery;
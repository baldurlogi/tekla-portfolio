import React, { useRef, useState, useEffect } from 'react'
import { PROJECTS } from '../constants/images';
import { cld } from '../lib/cdn';
import { Link } from 'react-router-dom';
import { VIDEO_PROJECTS } from '../constants/videoProjects';

const Gallery = () => {
  const galleryRef = useRef(null);
  const videosRef = useRef(null);
  const [activeSection, setActiveSection] = useState('gallery');

  const scrollToSection = (ref, section) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(section);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Sort entries by intersectionRatio to handle overlapping sections
        const visibleEntries = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          const mostVisible = visibleEntries[0];
          setActiveSection(mostVisible.target.id);
        }
      },
      {
        threshold: [0.2, 0.5, 0.8], // Multiple thresholds for better accuracy
        rootMargin: '-10% 0px' // Reduced margin for more precise detection
      }
    );

    // Observe both sections
    if (galleryRef.current) observer.observe(galleryRef.current);
    if (videosRef.current) observer.observe(videosRef.current);

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative flex gap-8 max-w-[90rem] mx-auto">
      {/* Sticky Sidebar */}
      <aside className="sticky top-24 h-fit hidden md:block w-48 p-4">
        <nav className="flex flex-col gap-4">
          <button
            onClick={() => scrollToSection(galleryRef, 'gallery')}
            className={`text-left text-lg tracking-wide px-4 py-2 rounded-md transition-all duration-300 ease-in-out transform ${activeSection === 'gallery'
              ? 'border-2 text-neutral-800 font-medium translate-x-2'
              : 'hover:border-2 hover:translate-x-2'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection(videosRef, 'videos')}
            className={`text-left text-lg tracking-wide px-4 py-2 rounded-md transition-all duration-300 ease-in-out transform ${activeSection === 'videos'
              ? 'border-2 text-neutral-800 font-medium translate-x-2'
              : 'hover:border-2 hover:translate-x-2'
            }`}
          >
            Videos
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-4 py-16">
        {/* Photo Gallery Section */}
        <section ref={galleryRef} id="gallery">
          <h1 className="text-3xl md:text-4xl uppercase tracking-widest mb-12 text-center">
            Projects
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 group/list'>
            {PROJECTS.map(project => (
              <article key={project.id} className="group/item transition-opacity duration-300 group-hover/list:opacity-50 hover:!opacity-100">
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
                    className="w-full aspect-[4/5] object-cover rounded-md shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-105"
                    loading="lazy"
                  />
                  <h2 className="mt-4 text-xl tracking-widest text-center">
                    {project.title}
                  </h2>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Video Projects Section */}
        <section ref={videosRef} id="videos" className="mt-32">
          <h2 className="text-3xl md:text-4xl uppercase tracking-widest mb-12 text-center">
            Video Work
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {VIDEO_PROJECTS.map(video => (
              <article key={video.id} className="flex flex-col">
                <div className="relative pb-[56.25%] w-full">
                  {video.platform === 'youtube' ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full rounded-md shadow-lg"
                    />
                  ) : (
                    <iframe
                      src={`https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F${video.videoId}&show_text=false`}
                      title={video.title}
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full rounded-md shadow-lg"
                    />
                  )}
                </div>
                <h3 className="mt-4 text-xl tracking-widest text-center">
                  {video.title}
                </h3>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Gallery
import React from 'react'
import { COLLABORATIONS } from '../constants/collaborations';
import { GALLERY_IMAGES } from '../constants/images';
import { cld } from '../lib/cdn';

const About = () => {
  return (
    <article className="max-w-5xl mx-auto px-4 py-16 leading-relaxed">

      {/* ── Collaborations block ─────────────────────────────────── */}
      <section className="mb-16">
        <h1 className="text-3xl md:text-4xl uppercase tracking-widest mb-8">
          Collaborations
        </h1>

        <div className="space-y-8">
          {/* helper to render each category */}
          {Object.entries(COLLABORATIONS).map(([key, list]) => (
            <Category key={key} title={titleMap[key]} items={list} />
          ))}
        </div>
      </section>

      {/* ── Bio / portrait block (optional) ─────────────────────── */}
      <section className="grid md:grid-cols-2 gap-8 items-start">
        <img
          src={cld('Oribe_march_2023_8_lhgy5n', 640)}
          srcSet={`
            ${cld('Oribe_march_2023_8_lhgy5n',320)} 320w,
            ${cld('Oribe_march_2023_8_lhgy5n',640)} 640w,
            ${cld('Oribe_march_2023_8_lhgy5n',1280)} 1280w,
            ${cld('Oribe_march_2023_8_lhgy5n',1920)} 1920w
          `}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          alt="Tekla Kristjánsdóttir headshot"
          className="w-full rounded-md object-cover shadow"
        />
        <div>
          <h2 className="text-2xl uppercase tracking-widest mb-4">About Tekla</h2>
          <p className="mb-4">
            Tekla Kristjánsdóttir is an Icelandic makeup artist and hair stylist known for…
          </p>
          <p>
            Her work blends ethereal nordic tones with modern editorial edge…
          </p>
        </div>
      </section>

    </article>
  );
}

/* ── helper component ─────────────────────────────────────────── */
const titleMap = {
  brands: 'Brands',
  music: 'Music',
  magazines: 'Magazines',
  events: 'Events & Fashion Week',
  tvFilm: 'TV & Film',
};

function Category({ title, items }) {
  return (
    <div>
      <h3 className="text-lg font-semibold uppercase tracking-wide mb-2">
        {title}
      </h3>
      <ul className="flex flex-wrap gap-x-4 gap-y-2 text-neutral-700">
        {items.map(name => (
          <li
            key={name}
            className="before:content-['•'] before:mr-2 before:text-neutral-400"
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About
import React from 'react'
import { COLLABORATIONS } from '../constants/collaborations';
import { cld } from '../lib/cdn';

const About = () => {
  return (
    <article className="max-w-5xl mx-auto px-4 py-16 leading-relaxed">

      {/* ── Bio / portrait block  ─────────────────────── */}
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
          <h3 className="text-xl font-semibold tracking-widest mb-2 underline underline-offset-4">°1</h3>
          <p className="mb-4">
            My name is Tekla Kristjánsdóttir and i'm 25 years old. Born and raised in Reykjavík, Iceland but moved to Copenhagen the summer of 2021.

            I'm a Nicci Welsh Makeup Academy graduate and a part of Nicci Welsh pro team. 

            On another note I have a BSc in Software Engineering and am a 3rd year Brand Design student.

            English, danish or icelandic? your choice.
          </p>
          <h3 className="text-xl font-semibold tracking-widest mb-2 underline underline-offset-4">°2</h3>
          <p>
            I'm a professional makeup artist & hair stylist, over the past years I've had the opportunity to work with the most amazing people from all parts of the industry. 
            My experience expands to TV, fashion shoots, music videos & celebrities, four CPHFW seasons and ofcourse all the beautiful brides I've been so lucky to be a part of their special day ... and so much more.
            Scroll down for detailed experience.
          </p>
        </div>
      </section>

      {/* ── Collaborations block ─────────────────────────────────── */}
      <section className="mb-16 mt-16">
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
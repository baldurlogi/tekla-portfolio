import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../assets/IMG_2688.jpg';
import Bentobox from '../components/Bentobox';

const Home = () => {
   const scrollToFeatured = () => {
    document.getElementById('featured').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
   }


  return (
    <div className="flex flex-col gap-24">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="min-h-screen flex items-center justify-center bg-[#f8f0e4] pb-60 relative">
      <div className="flex flex-col items-center">
        <h1
          className="text-center leading-tight uppercase tracking-widest text-3xl md:text-5xl animate-[fadeUp_.8s_ease-out_forwards]"
        >
          TEKLA KRISTJÁNSDÓTTIR<br />
          <span className="text-base md:text-2xl block mt-4 tracking-wider">
            Makeup Artist&nbsp;and Hair Stylist
          </span>
        </h1>

        {/* Scroll Down Button */}
        <div className="absolute bottom-32 flex flex-col mt-2">
          <button
            onClick={scrollToFeatured}
            className="flex flex-col items-center mt-2 animate-bounce cursor-pointer transition-opacity hover:opacity-70"
            aria-label="Scroll to signature looks"
          >
            <span className="text-sm text-neutral-600 tracking-wide animate-pulse">
              Click to see my work
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-neutral-800"
            >
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </svg>
          </button>
        </div>
      </div>
      </section>


      {/* ── Featured Gallery Strip ───────────────────────────────────── */}
      <section id="featured" className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl uppercase tracking-widest mb-12 text-center">Signature Looks</h2>
        {/* swap static imgs for <Link to="/gallery">…</Link> thumbnails, a slider, etc. */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <img src={image1} alt="" className="aspect-square object-cover" />
          <img src={image1} alt="" className="aspect-square object-cover" />
          <img src={image1} alt="" className="aspect-square object-cover" />
          <img src={image1} alt="" className="aspect-square object-cover" />
        </div>
        <Link to="/gallery" className="mt-6 inline-block underline">View full gallery →</Link>
      </section>

      {/* ── Bentobox ───────────────────────────────────────────────── */}
      <Bentobox />

      {/* ── Bridal Call-out ──────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl uppercase tracking-widest mb-12 text-center">Bridal Beauty</h2>
          <p className="mt-4 text-neutral-700">
            From soft romantic to modern editorial, bespoke bridal looks that last all day.
          </p>
          <Link
            to="/bridal"
            className="inline-block px-8 py-3 bg-neutral-800 text-white rounded-md
                     uppercase tracking-wider hover:bg-neutral-700 transition-colors
                     mt-8"
          >
            Explore bridal services
          </Link>
        </div>
      </section>

      {/* ── Latest Blog Teasers ──────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl uppercase tracking-widest mb-12 text-center">Latest On The Blog</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map(id => (
            <Link key={id} to={`/blog/post-${id}`} className="group">
              <article className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <img src={image1} alt="" />
                <div className="p-4">
                  <h3 className="font-semibold mb-2 group-hover:underline">
                    Blog post title #{id}
                  </h3>
                  <p className="text-sm text-neutral-600 line-clamp-3">
                    Short teaser text about trends, behind-the-scenes, or product tips…
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
        <Link to="/blog" className="mt-6 inline-block underline">Read all posts →</Link>
      </section>

      {/* ── Contact CTA strip ────────────────────────────────────────── */}
      <section className="bg-[#f8f0e4] py-20 text-center">
        <h2 className="text-3xl md:text-4xl uppercase tracking-widest mb-6 text-center">Ready to Book?</h2>
        <p className="mt-4 text-neutral-700">
          Let’s craft the perfect look for your shoot, event, or wedding.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block px-10 py-3 bg-neutral-800 text-white uppercase tracking-wider hover:opacity-90"
        >
          Get in touch
        </Link>
      </section>
    </div>
  )
}

export default Home
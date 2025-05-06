import React from 'react'
import { Link } from 'react-router-dom'
import { cld } from '../lib/cdn';

const DUMMY_POSTS = [
  {
    id: 1,
    title: 'Summer Wedding Makeup Trends 2024',
    excerpt: 'Discover the hottest bridal makeup trends for the upcoming summer season, from glowing skin to subtle pops of color.',
    date: '2024-03-15',
    image: 'bridal_makeup_1_abc123',
    category: 'Bridal'
  },
  {
    id: 2,
    title: 'Behind the Scenes: Copenhagen Fashion Week',
    excerpt: 'Take a peek behind the curtain at my experience doing makeup for multiple shows during Copenhagen Fashion Week.',
    date: '2024-02-28',
    image: 'fashion_week_1_xyz789',
    category: 'Fashion'
  },
  {
    id: 3,
    title: 'My Favorite Products for Long-Lasting Makeup',
    excerpt: 'A curated list of my go-to products that ensure your makeup stays flawless from morning to night.',
    date: '2024-02-15',
    image: 'products_1_def456',
    category: 'Products'
  }
];

const Blog = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl uppercase tracking-widest mb-4">
          Blog
        </h1>
        <p className="text-neutral-600">
          Insights, tips, and behind-the-scenes from my work in makeup artistry
        </p>
      </header>

      {/* Featured Post */}
      <div className="mb-16">
        <article className="grid md:grid-cols-2 gap-8">
          <img
              src={cld('IMG_2688_jgjtcw', 640)}
              srcSet={`
                ${cld('IMG_2688_jgjtcw',320)} 320w,
                ${cld('IMG_2688_jgjtcw',640)} 640w,
                ${cld('IMG_2688_jgjtcw',1280)} 1280w,
                ${cld('IMG_2688_jgjtcw',1920)} 1920w
              `}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              alt="Tekla Kristjánsdóttir headshot"
              className="w-full rounded-md object-cover shadow"
          />
          <div className="flex flex-col justify-center">
            <span className="text-sm text-neutral-500 uppercase tracking-wider mb-2">
              {DUMMY_POSTS[0].category}
            </span>
            <h2 className="text-2xl font-semibold mb-3">
              {DUMMY_POSTS[0].title}
            </h2>
            <p className="text-neutral-600 mb-4">
              {DUMMY_POSTS[0].excerpt}
            </p>
            <Link
              to={`/blog/${DUMMY_POSTS[0].id}`}
              className="inline-flex items-center text-neutral-800 hover:underline"
            >
              Read more →
            </Link>
          </div>
        </article>
      </div>

      {/* Post Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DUMMY_POSTS.slice(1).map(post => (
          <article key={post.id} className="flex flex-col">
            <img
                src={cld('IMG_2688_jgjtcw', 640)}
                srcSet={`
                  ${cld('IMG_2688_jgjtcw',320)} 320w,
                  ${cld('IMG_2688_jgjtcw',640)} 640w,
                  ${cld('IMG_2688_jgjtcw',1280)} 1280w,
                  ${cld('IMG_2688_jgjtcw',1920)} 1920w
                `}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                alt="Tekla Kristjánsdóttir headshot"
                className="w-full rounded-md object-cover shadow"
            />
            <span className="text-sm text-neutral-500 uppercase tracking-wider mb-2">
              {post.category}
            </span>
            <h3 className="text-xl font-semibold mb-2">
              {post.title}
            </h3>
            <p className="text-neutral-600 mb-4 flex-grow">
              {post.excerpt}
            </p>
            <Link
              to={`/blog/${post.id}`}
              className="inline-flex items-center text-neutral-800 hover:underline mt-auto"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>

      {/* Categories */}
      <div className="mt-16 text-center">
        <h2 className="text-xl uppercase tracking-wider mb-4">Categories</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['All', 'Bridal', 'Fashion', 'Products', 'Tips & Tricks'].map(category => (
            <button
              key={category}
              className="px-4 py-2 rounded-full border border-neutral-200 hover:bg-neutral-100 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
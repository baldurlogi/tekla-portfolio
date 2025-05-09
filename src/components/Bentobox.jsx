import React from 'react'

const Bentobox = () => {
  const achievements = [
    {
      title: 'Brand Collaborations',
      content: 'Worked with over 16 beauty & fashion brands',
      span: 'col-span-1 md:col-span-2 row-span-1',
      bgColor: 'bg-rose-50'
    },
    {
      title: 'Music Industry',
      content: '18+ music artists & projects',
      span: 'col-span-1 row-span-1',
      bgColor: 'bg-purple-50'
    },
    {
      title: 'Editorial Features',
      content: 'Featured in 4+ magazines',
      span: 'col-span-1 row-span-2',
      bgColor: 'bg-orange-50'
    },
    {
      title: 'TV & Film',
      content: 'Contributed to 8+ screen productions',
      span: 'col-span-1 md:col-span-2 row-span-1',
      bgColor: 'bg-rose-100'
    },
    {
      title: 'Fashion Week',
      content: 'Worked with multiple brands at Copenhagen Fashion Week',
      span: 'col-span-1 row-span-2',
      bgColor: 'bg-orange-200'
    },
    {
      title: 'Bridal Expertise',
      content: 'Specialist in bridal makeup & hair styling',
      span: 'col-span-1 md:col-span-2 row-span-1',
      bgColor: 'bg-violet-50'
    },
    {
      title: 'Design & Tech',
      content: 'Brand designer & BSc in Software Engineering',
      span: 'col-span-1 row-span-2',
      bgColor: 'bg-neutral-100'
    },
    {
      title: 'Languages',
      content: 'Fluent in Icelandic, English, and Danish',
      span: 'col-span-1 row-span-1',
      bgColor: 'bg-green-50'
    },
    {
      title: 'Events',
      content: 'Styled makeup for 4+ public and private events',
      span: 'col-span-1 md:col-span-2 row-span-1',
      bgColor: 'bg-neutral-50'
    },
  ];

  return (
    <section className="px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl uppercase tracking-widest mb-12 text-center">
        Achievements & Focus
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[minmax(120px,auto)] gap-4">
        {achievements.map((item, index) => (
          <div
            key={index}
            className={`
              ${item.span}
              ${item.bgColor}
              rounded-2xl p-6
              hover:scale-[1.02] hover:shadow-xl
              transition-all duration-300
              flex flex-col justify-center
            `}
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-neutral-700">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Bentobox
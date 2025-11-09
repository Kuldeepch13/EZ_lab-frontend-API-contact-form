import React from 'react';

const projects = [
  {
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=60',
    title: 'Dashboard App',
    desc: 'Analytics dashboard built with React, Tailwind, and Chart.js.',
  },
  {
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=60',
    title: 'Landing Page',
    desc: 'High-converting product landing page for SaaS startup.',
  },
  {
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=60',
    title: 'Mobile App UI',
    desc: 'Minimalist UI design for a health & fitness app.',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center mb-12 px-4">
        <h2 className="text-4xl font-bold mb-3">Our Work</h2>
        <p className="text-gray-400">Explore some of the projects we’ve recently completed.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {projects.map((p, i) => (
          <div key={i} className="group relative overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <img src={p.img} alt={p.title} className="w-full h-64 object-cover opacity-90 group-hover:opacity-70 transition-all" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-md">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-gray-400 text-sm">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

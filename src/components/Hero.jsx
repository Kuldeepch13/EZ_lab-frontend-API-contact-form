import React from 'react'

export default function Hero() {
  return (
    <div className="container flex flex-col items-center justify-center text-center py-24 md:py-36">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
        Transforming <span className="text-accent">Ideas</span> into
        <br className="hidden md:block" /> Impactful Digital Experiences
      </h1>
      <p className="max-w-2xl text-gray-300 text-base md:text-lg">
        We help startups and enterprises design, develop, and deploy
        innovative digital products with precision and creativity.
      </p>
      <a
        href="#contact"
        className="mt-8 px-6 py-3 bg-accent text-black font-semibold rounded-lg hover:bg-accent/80 transition"
      >
        Contact Us
      </a>
    </div>
  )
}

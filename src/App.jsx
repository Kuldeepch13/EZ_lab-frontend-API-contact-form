import React from 'react'
import Hero from './components/Hero'
import AboutTeam from './components/AboutTeam'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import ContactForm from './components/ContactForm'

export default function App() {
  return (
    <div className="bg-[#0b0b0b] text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
        <div className="container flex justify-between items-center h-16">
          <div className="text-2xl font-semibold tracking-wide text-accent">EZ Labs</div>
          <div className="hidden md:flex space-x-6 text-sm uppercase">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-accent transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="pt-20">
        <section id="home"><Hero /></section>
        <section id="about" className="py-20"><AboutUs /></section>
        <section id="team" className="py-16 bg-gradient-to-b from-black/40 to-transparent"><AboutTeam /></section>
        <section id="services" className="py-20"><Services /></section>
        <section id="portfolio" className="py-20 bg-gradient-to-b from-black/40 to-transparent"><Portfolio /></section>
        <section id="contact" className="py-20"><ContactForm /></section>
      </main>

      {/* FOOTER */}
      <footer className="py-8 text-center text-gray-400 border-t border-white/10">
        © {new Date().getFullYear()} EZ Labs | Crafted with 💻 for the Front-End Intern Assignment
      </footer>
    </div>
  )
}

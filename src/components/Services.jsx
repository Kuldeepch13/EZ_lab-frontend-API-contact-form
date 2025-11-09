import React from 'react'
import { Code, Palette, Cloud } from 'lucide-react'

export default function Services() {
  const services = [
    { icon: <Code className="w-10 h-10 text-accent" />, title: 'Web Development', desc: 'Robust and scalable websites using React, Next.js, and modern APIs.' },
    { icon: <Palette className="w-10 h-10 text-accent" />, title: 'UI/UX Design', desc: 'Beautiful, user-focused designs that convert and engage.' },
    { icon: <Cloud className="w-10 h-10 text-accent" />, title: 'Cloud Integration', desc: 'Seamless cloud deployment and optimization with AWS & Vercel.' },
  ]

  return (
    <div className="container text-center">
      <h2 className="text-3xl font-bold mb-8">Our <span className="text-accent">Services</span></h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((srv, i) => (
          <div key={i} className="card hover:bg-white/5 transition-all">
            <div className="flex justify-center mb-3">{srv.icon}</div>
            <h4 className="text-lg font-semibold mb-1">{srv.title}</h4>
            <p className="text-gray-400 text-sm">{srv.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

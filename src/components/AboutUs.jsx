import React from "react";
import { motion } from "framer-motion";
import { Users, Lightbulb, Target } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="text-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            About <span className="text-accent">EZ Labs</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We are a team of passionate developers, designers, and strategists
            who love crafting exceptional digital experiences. Our goal is to
            blend technology and creativity to deliver meaningful impact.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="card hover:bg-white/10 hover:scale-105 transition-all duration-300 border border-white/10 shadow-lg rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-3">
              <Lightbulb className="text-accent w-7 h-7" />
              <h3 className="text-lg font-semibold text-white">Our Vision</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              To create innovative digital products that empower businesses and
              enhance user experiences through creativity and smart technology.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="card hover:bg-white/10 hover:scale-105 transition-all duration-300 border border-white/10 shadow-lg rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-3">
              <Target className="text-accent w-7 h-7" />
              <h3 className="text-lg font-semibold text-white">Our Mission</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We strive to transform bold ideas into functional, scalable, and
              visually stunning solutions that make a difference.
            </p>
          </motion.div>

          {/* Team */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="card hover:bg-white/10 hover:scale-105 transition-all duration-300 border border-white/10 shadow-lg rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-3">
              <Users className="text-accent w-7 h-7" />
              <h3 className="text-lg font-semibold text-white">Our Team</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              A diverse group of innovators united by passion and curiosity —
              pushing boundaries and building impactful solutions together.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

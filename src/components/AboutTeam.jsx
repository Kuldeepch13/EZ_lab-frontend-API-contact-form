import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Aarav Patel",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    linkedin: "#",
    email: "aarav@ezlabs.com",
  },
  {
    name: "Meera Sharma",
    role: "AI Engineer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    linkedin: "#",
    email: "meera@ezlabs.com",
  },
  {
    name: "Rohan Mehta",
    role: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    linkedin: "#",
    email: "rohan@ezlabs.com",
  },
  {
    name: "Isha Nair",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    linkedin: "#",
    email: "isha@ezlabs.com",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-gray-50 via-blue-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-gray-900 font-inter">
          Meet Our Team
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-14 leading-relaxed">
          Our passionate team blends innovation, creativity, and expertise to
          craft powerful educational tools and experiences that inspire young
          learners worldwide.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
              whileHover={{ scale: 1.05 }}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.3,
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-6 border-4 border-accent shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-accent mb-4 font-medium">{member.role}</p>
              <div className="flex justify-center space-x-5">
                <a
                  href={member.linkedin}
                  className="text-gray-600 hover:text-accent transition-colors"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="text-gray-600 hover:text-accent transition-colors"
                >
                  <Mail size={22} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

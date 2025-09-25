// src/components/TeamSection.jsx
import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Kartik Mamgain",
    role: "I am design at chef, where he is making it possible to order.",
    color: "md:border-r-red-500 md:border-b-purple-500 md:border-b-3 md:border-r-3",
  },
  {
    name: "J K Saini",
    role: "Gabe is currently leading consumer experience design.",
    color: "md:border-l-red-500 md:border-b-3 md:border-b-blue-500 ",
  },
  {
    name: "Vinay Saini",
    role: "I am a product Designer at Facebook working at the intersection.",
    color: "md:border-r-yellow-500 md:border-r-3",
  },
  {
    name: "Vansh Tyagi",
    role: "I am Explored a wide variety of technologies in his career.",
    color: "",
  },
];

export default function TeamSection() {
  return (
    <section className="w-full bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side - Photos */}
        <motion.div
          className="grid grid-cols-2 gap-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="team1"
            className="w-full h-52 object-cover rounded-t-[45px] rounded-bl-[45px] border-2 border-white"
          />
          <img
            src="https://randomuser.me/api/portraits/men/33.jpg"
            alt="team2"
            className="w-full h-52 object-cover rounded-t-[45px] rounded-br-[45px] border-2 border-white"
          />
          <img
            src="https://randomuser.me/api/portraits/men/34.jpg"
            alt="team3"
            className="w-full h-52 object-cover rounded-b-[45px] rounded-tl-[45px] border-2 border-white"
          />
          <img
            src="https://randomuser.me/api/portraits/men/35.jpg"
            alt="team4"
            className="w-full h-52 object-cover rounded-b-[45px] rounded-tr-[45px] border-2 border-white"
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Team</h2>
          <p className="text-gray-300 mb-10 max-w-lg">
            On the best approach to solve a problem, Makeshift helps you hone
            your craft by tapping into our member&apos;s experience.
          </p>

          {/* Members List */}
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                className={`p-6 pl-4 ${member.color}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-400 text-sm leading-snug">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

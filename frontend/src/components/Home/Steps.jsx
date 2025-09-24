import { Briefcase, Bot, MessageSquare } from "lucide-react";
import StepCard from "../Utils/StepCard";

import { motion } from "framer-motion";

export default function Steps() {
  const steps = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Choose Your Role",
      description:
        "📌 Select your job title or industry (IT, Marketing, Finance, etc.).\n⚡ Our AI loads role-specific interview questions.",
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Practice with AI",
      description:
        "🤖 Do a mock interview with AI that simulates real HR and technical rounds.\n🎯 Answer live, just like in a real interview.",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Get Instant Feedback",
      description:
        "📊 Receive detailed insights on your answers, confidence, communication style, and areas for improvement.\n✅ Track progress until you're 100% ready.",
    },
  ];

  return (
    <section className="px-6 py-16 bg-black text-white">
      {/* Animated Heading */}
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="inline-block text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 border border-purple-500 px-4 py-2 rounded-lg">
          Three Simple Steps to best interview
        </h2>
        <p className="mt-4 text-gray-300">Get started in minutes, not hours.</p>
      </motion.div>

      {/* Steps Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <StepCard key={index} {...step} index={index} />
        ))}
      </div>
    </section>
  );
}

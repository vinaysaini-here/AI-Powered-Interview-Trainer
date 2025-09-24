import { Bot, Mic, FileText } from "lucide-react";
import FeatureCard from "../Utils/FeatureCard";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      icon: <Bot className="w-8 h-8 text-purple600" />,
      title: "AI-Powered Mock Interviews",
      link: "Practice with industry-specific questions.",
      description:
        "Practice one-on-one mock interviews tailored to your chosen role. Experience the pressure and flow of actual interviews. Adaptive questioning: The AI asks follow-up questions.",
    },
    {
      icon: <Mic className="w-8 h-8 text-purple600" />,
      title: "Real-Time Feedback",
      link: "Get instant analysis on tone, body language, and answers.",
      description:
        "Tone Analysis – AI checks confidence, clarity, and fluency in your voice. Body Language Tracking – (via camera) monitors eye contact, posture, and facial expressions.",
    },
    {
      icon: <FileText className="w-8 h-8 text-purple600" />,
      title: "Industry-Specific Question Bank",
      link: "IT, Finance, Marketing, HR, etc.",
      description:
        "Curated interview question libraries for IT, Finance, Marketing, HR, Healthcare, Sales, and more. Covers technical, situational, and behavioral questions.",
    },
  ];

  return (
    <section className="px-6 py-16 bg-bghero text-textmain">
      {/* Heading */}
      <motion.div
        className="text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="inline-block text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 border border-purple-500 px-4 py-2 rounded-lg">
          Your AI Powered interview toolkit
        </h2>
        <p className="mt-4 text-gray-300">
          Everything you need, in one smart flow.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}

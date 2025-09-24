import { motion } from "framer-motion";

export default function StepCard({ icon, title, description, index }) {
  return (
    <motion.div
      className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 shadow-lg hover:shadow-purple-500/40 text-left flex flex-col gap-4 cursor-pointer transition-all"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="p-3 w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-300 text-sm whitespace-pre-line">{description}</p>
      <button className="mt-auto inline-flex items-center gap-1 text-purple-400 hover:text-pink-400 font-medium transition-colors">
        Explore More →
      </button>
    </motion.div>
  );
}

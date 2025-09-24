import { motion } from "framer-motion";

export default function FeatureCard({ icon, title, link, description, index }) {
  return (
    <motion.div
      className="bg-textmain text-bghero rounded-lg shadow-md p-6 hover:shadow-lg transition"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-blue600 mt-1 font-medium cursor-pointer hover:underline">
        {link}
      </p>
      <p className="mt-3 text-gray600 text-sm">{description}</p>
    </motion.div>
  );
}

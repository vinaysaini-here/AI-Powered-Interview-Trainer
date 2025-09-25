import React from "react";

export default function Banner() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#0f001f] via-black to-[#0f001f] py-20 flex items-center justify-center">
      {/* Badge */}
      <div className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md shadow-lg">
        <h1 className="text-3xl md:text-6xl font-bold text-purple-200 flex items-center gap-2 text-center">
          ✨ Ai-Powered Interview Trainer
        </h1>
      </div>
    </section>
  );
}

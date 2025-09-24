import React from "react";

const Hero = () => {
  return (
    <div className="py-12 bg-gradient-to-b from-[#0a0118] via-[#120327] to-black text-textmain">
      <section className="flex flex-col items-center text-center px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          ✦ Ai-Powered Interview Trainer
        </h1>
        <p className="mt-3 text-gray-300 text-sm sm:text-base">
          Personalized, real-time interview coaching with instant feedback
        </p>

        {/* Hero Image */}
        <div className="mt-12 max-w-4xl w-full px-4">
          <div className="w-full aspect-video bg-bghero2 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/hero-img.jpg" // replace with your image path
              alt="Interview trainer demo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

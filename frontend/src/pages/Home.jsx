import React from "react";
import Hero from "../components/Home/Hero";
import Features from "../components/Home/Features";
import Steps from "../components/Home/Steps";
import TeamSection from "../components/Home/TeamSection";
import Contact from "../components/Home/Contact";
import Banner from "../components/Home/Banner";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Steps />
      <TeamSection />
      <Contact />
      <Banner />
    </>
  );
};

export default Home;

import React from 'react'
import heroPic from '/hero1.jpeg';
import { Badge } from "../lightswind/badge";
import { motion } from "framer-motion";
import { BorderBeam } from '../lightswind/border-beam';

// ✅ Data object for Hero Section
const heroData = {
  name: "Sundar Shrestha",
  title: "BSc (Hons) IT | Full-Stack Developer | MERN Stack Specialist",
  subtitle: "Passionate Developer with Focus on Web & Mobile Applications",
  description: "Detail-oriented and passionate Full-Stack Developer with hands-on experience in building scalable and responsive web applications and mobile-friendly applications using the MERN stack. Committed to continuous learning and contributing to impactful tech solutions.",
  badges: ["MERN Stack", "Problem Solving", "Mobile App", "UI/UX", "QA"],
  image: {
    src: heroPic
  }
};


function HeroSection() {
  return (<motion.section
    id="hero"
    className="text-foreground bg-transparent flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto w-full py-12 md:py-20"
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    }}
  >
    {/* Left Section */}
    <motion.div
      className="flex-1 space-y-6 p-6 text-center md:text-left"
      initial={false}
    >
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold leading-tight"
        initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.8, ease: "easeOut" },
        }}
      >
        {heroData.name}
        <motion.span
          className="block text-lg md:text-xl font-semibold mt-2 text-blue-500"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          {heroData.title}
        </motion.span>
      </motion.h1>

      <motion.h2
        className="text-xl md:text-2xl text-muted-foreground font-medium"
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.8, ease: "easeOut" },
        }}
      >
        {heroData.subtitle}
      </motion.h2>

      <motion.p
        className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl"
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.8, ease: "easeOut" },
        }}
      >
        {heroData.description}
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center md:justify-start gap-3 mt-4"
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.8, ease: "easeOut" },
        }}
      >
        {heroData.badges.map((badge, i) => (
          <Badge
            key={i}
            className="px-4 py-1 rounded-full text-xs font-medium 
                bg-black text-white hover:scale-105 transition-transform duration-300
                dark:bg-white dark:text-black cursor-pointer"
          >
            {badge}
          </Badge>
        ))}
      </motion.div>
    </motion.div>

    {/* Right Section */}
    <motion.div
      className="flex-1 flex justify-center p-6 mt-10 md:mt-0"
      initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
    >

      <div className="relative w-90 h-90 rounded-full overflow-hidden p-2 shadow-2xl group">
        <BorderBeam
          size={280}
          duration={3}
          borderThickness={4}
          glowIntensity={3}
          beamBorderRadius={999}
          pauseOnHover
        />

        <img
          src={heroData.image.src}
          className="w-full h-full object-cover rounded-full"
          alt="Hero"
        />
      </div>



    </motion.div>
  </motion.section>
  );
}

export default HeroSection
import { Separator } from "../lightswind/separator";
import { motion } from "framer-motion";
import resume from "/resume.pdf"

export const AboutSection = () => {
    const aboutData = {
        title: "About Me",
        description: `I am a passionate Full-Stack Developer with a strong focus on the MERN stack (MongoDB, Express, React, Node.js) and hands-on experience building responsive and user-friendly web applications. I hold a BSc (Hons) in Information Technology from the Sri Lanka Institute of Information Technology (SLIIT) and have worked on multiple real-world projects, including hotel booking platforms, learning management systems, and dashboard-based applications. 
    
    Alongside development, my experience as a Quality Assurance Intern has strengthened my attention to detail and understanding of building reliable, high-quality applications. Currently, I am working as a freelancer while continuing to enhance my full-stack skills through structured MERN stack training. I’m driven by continuous learning and enjoy turning ideas into clean, functional, and impactful digital solutions.`,
        resumeLink: resume,
    };
    return (
        <motion.div
            id="about"
            className="text-foreground max-w-7xl mx-auto w-full px-6 py-12 space-y-4"
            initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.h2
                className="text-4xl font-bold text-center mb-12 "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {aboutData.title}
            </motion.h2>

            <p style={{ whiteSpace: "pre-line" }} className="text-muted-foreground text-md max-w-3xl text-justify">
                {aboutData.description}
            </p>

            <Separator />
            <a
                href={aboutData.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 font-semibold rounded transition-colors
             bg-black text-white hover:bg-gray-800
             dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
                Resume
            </a>
        </motion.div>
    );
};

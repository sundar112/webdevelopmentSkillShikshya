"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
const projects = [
    {
        id: 0,
        title: "Stock Option | MERN Stock Trading Simulator",
        subtitle:
            "Developed a stock trading simulator. Built with MongoDB, Express.js, React.js, and Node.js.",
        date: "2024",
        link: "https://github.com/sundar112/StockOption",
        image:
            "https://images.unsplash.com/photo-1612010167108-3e6b327405f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RvY2t8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: 1,
        title: "EZTraval | Travel Guid and Hotel Booking system",
        subtitle:
            "Developed a web application that allows users to explore, book, and rate hotels, similar to a mini version of Airbnb. Built using MongoDB, Express.js, and Node.js.",
        date: "2024",
        link: "https://github.com/sundar112/EZ-Traval",
        image:
            "https://plus.unsplash.com/premium_photo-1681487906725-ecd65970ac66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: 2,
        title: "Dhamma Quiz | Mobile App for (quiz game) Dhamma Learning",
        subtitle:
            "Created a mobile application to promote Buddhist knowledge through interactivequizzes Built with Flutter",
        date: "2025",
        link: "https://play.google.com/store/apps/details?id=com.dhamma.quiz",
        image:
            "https://media.istockphoto.com/id/1193505220/photo/quiz.webp?a=1&b=1&s=612x612&w=0&k=20&c=A6muCmd6E0HIVe0Vg5SgSVVl7eU4rmcagcSQTjg1rO8=",
    },
    {
        id: 3,
        title: "spotify-clone | Music Streaming Web Application",
        subtitle:
            "Developed a Spotify clone web application  using HTML CSS JS and Spotify API.",
        date: "2026",
        link: "https://github.com/sundar112/webdevelopmentSkillShikshya/tree/main/jsclass/Day14",
        image:
            "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BvdGlmeXxlbnwwfHwwfHx8MA%3D%3D",
    },

    {
        id: 4,
        title: "Weather App | Weather Forecasting Web Application",
        subtitle:
            "Developed a weather forecasting web application using HTML, CSS, JavaScript, and the OpenWeatherMap API to provide real-time weather updates and forecasts for any location worldwide.",
        date: "2023",
        link: "https://github.com/sundar112/webdevelopmentSkillShikshya/tree/main/jsclass/02_weather",
        image:
            "https://plus.unsplash.com/premium_photo-1678939631639-d07fae05211b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2VhdGhlciUyMGZvcmVjYXN0fGVufDB8fDB8fHww",
    },

];

export const ProjectsSection = () => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ when: "beforeChildren", staggerChildren: 0.15 }}
        >
            <section className="max-w-7xl mx-auto px-6 py-16">
                {/* Section Title */}
                <motion.h2
                    className="text-4xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    Featured Projects
                </motion.h2>

                {/* Projects Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="group relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-background/70 to-muted/40 backdrop-blur-lg border border-white/10"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            {/* Project Image */}
                            <div className="relative h-56 overflow-hidden">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80"></div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                                    {project.subtitle}
                                </p>
                                <p className="mt-3 text-xs text-muted-foreground">
                                    {project.date}
                                </p>

                                {/* Link Button */}
                                <motion.a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 mt-4 text-primary font-medium hover:underline"
                                    whileHover={{ x: 4 }}
                                >
                                    View Project <ArrowUpRight className="w-4 h-4" />
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
};

"use client";

import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "../lightswind/card.tsx";

import { motion } from "framer-motion";
import {
    SiReact, SiTailwindcss, SiJavascript, SiNodedotjs, SiExpress,
    SiMongodb, SiMysql, SiDocker, SiGit, SiElectron,
    SiPython, SiC, SiCplusplus, SiLinux, SiNextdotjs, SiHtml5, SiCss3
} from "react-icons/si";
import { FaJava } from "react-icons/fa"; // ✅ Java icon from Font Awesome
import { BorderBeam } from "../lightswind/border-beam.tsx";

export const technicalSkills = [
    {
        category: "Frontend",
        items: [
            { name: "React.js", icon: <SiReact className="text-sky-500" /> },
            { name: "Electron", icon: <SiElectron className="text-blue-400" /> },
            { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
            { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
            { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
            { name: "Next.js", icon: <SiNextdotjs className="text-blue-400" /> },
        ],
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
            { name: "Express.js", icon: <SiExpress className="text-gray-700 dark:text-gray-300" /> },
            { name: "Python", icon: <SiPython className="text-blue-400" /> },
            { name: "Java", icon: <FaJava className="text-red-500" /> },
            { name: "C", icon: <SiC className="text-blue-700" /> },
            { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
        ],
    },
    {
        category: "Database",
        items: [
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
            { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
        ],
    },
    {
        category: "Cloud & DevOps",
        items: [
            { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
            { name: "Git", icon: <SiGit className="text-orange-600" /> },
            { name: "Linux", icon: <SiLinux className="text-black dark:text-gray-100" /> },
        ],
    },
];


export const softSkills = [
    { name: "Problem Solving", icon: "🧩" },
    { name: "Teamwork & Collaboration", icon: "🤝" },
    { name: "Adaptability", icon: "🌱" },
    { name: "Analytical Thinking", icon: "🔍" },
    { name: "Continuous Learning", icon: "📚" },
    { name: "Time Management", icon: "⏰" },
    { name: "Leadership", icon: "🧠" },
    { name: "Creativity & Innovation", icon: "🎨" },
];

export default function ProfessionalProfile() {
    return (
        <motion.section
            id="skills"
            className="space-y-16 max-w-6xl mx-auto px-6 py-16"
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1,
                transition: { staggerChildren: 0.25, delayChildren: 0.2 },
            }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.h2
                className="text-4xl font-bold text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                Professional Profile
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-10">
                {/* Technical Skills */}

                <Card className="bg-gradient-to-br from-background/60 to-muted/40 backdrop-blur-xl border border-white/10 shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold">Technical Skills</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {technicalSkills.map((group, i) => (

                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.2, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h4 className="font-semibold mb-2">{group.category}</h4>
                                <div className="flex flex-wrap gap-3">
                                    <BorderBeam />
                                    {group.items.map((skill, idx) => (

                                        <motion.div
                                            key={idx}
                                            whileHover={{ scale: 1.1, rotate: 2 }}
                                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 border border-border shadow-sm hover:shadow-md cursor-pointer"
                                        >
                                            {skill.icon}
                                            <span>{skill.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </CardContent>
                </Card>

                {/* Soft Skills */}
                <Card className="bg-gradient-to-br from-background/60 to-muted/40 backdrop-blur-xl border border-white/10 shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold">Soft Skills</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            <BorderBeam />
                            {softSkills.map((skill, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{ scale: 1.08 }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-muted/40 border border-border shadow-sm hover:shadow-lg cursor-pointer"
                                >

                                    <span className="text-2xl">{skill.icon}</span>
                                    <span className="text-sm font-medium text-center">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </motion.section>
    );
}

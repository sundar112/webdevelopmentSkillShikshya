import { Card, CardHeader, CardTitle, CardContent } from "../lightswind/card";

import { motion } from "framer-motion";
import ProfessionalProfile from "./SkillCategory";
import graduation from '/graduation1.jpeg';
import apnacollage from '/cetrificate.jpg';
import skillShikshya from '/skillShikshya.jpg';
import broadwayinfo from '/broadwayinfo.png';
import { BorderBeam } from "../lightswind/border-beam";
const educationData = [
    {
        degree: "BSc (Hons) in Information Technology",
        institution: "Sri Lanka Institute of Information Technology (SLIIT)",
        duration: "Jun 2019 – Jun 2024",
        image: graduation,
        description: `Completed an undergraduate degree in Information Technology with strong foundations in software development, databases, and web technologies.`,
        highlights: [
            "Worked on multiple academic full-stack projects",
            "Developed a DBMS-Based Learning Management System (LMS)",
            "Gained practical experience in software engineering and system design",
        ],
    },
    {
        degree: "Full-Stack Development + Data Structures & Algorithms",
        institution: "Apna College",
        duration: "Sep 2024 – Jun 2025",
        image: apnacollage,
        description: `Completed intensive training in Full-Stack Web Development and Data Structures & Algorithms using the MERN stack and modern development tools.`,
        highlights: [
            "Built real-world full-stack projects using MongoDB, Express, React, and Node.js",
            "Strengthened problem-solving and coding skills",
            "Learned Git, REST APIs, and deployment practices",
        ],
    },
    {
        degree: "UI/UX Design Training",
        institution: "Broadway Infosys Pvt. Ltd.",
        duration: "Mar 2025 – Jun 2025",
        image: broadwayinfo,
        description: `Completed professional training in UI/UX design focusing on user-centered design principles, wireframing, prototyping, and usability testing.`,
        highlights: [
            "Designed user interfaces and interactive prototypes using Figma",
            "Learned user research, personas, and user journey mapping",
            "Worked on real-world design case studies and mobile/web app designs",
        ],
    },
    {
        degree: "MERN Stack Development Course",
        institution: "Skill Shikshya",
        duration: "Present",
        image: skillShikshya,
        description: `Currently pursuing practical training in MERN stack development with a focus on building modern, scalable web applications.`,
        highlights: [
            "Building full-stack applications using MongoDB, Express.js, React, and Node.js, Next.js",
            "Learning REST API development and backend integration",
            "Improving frontend skills with React components, hooks, and state management",
        ],
    },


];


export const EducationSection = () => {
    return (
        <motion.section
            id="education"
            className="space-y-10 py-10 px-6"
            initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            {/* Education */}
            <div>
                <motion.h2
                    className="text-4xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    Education
                </motion.h2>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-1 gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {educationData.map((edu, index) => (
                        <Card key={index} className="overflow-hidden border border-border/50 bg-card/60 backdrop-blur-md shadow-md">
                            <div className="grid md:grid-cols-3 gap-4 items-center">

                                {/* Image Side */}
                                <div className="md:col-span-1 flex justify-center items-center p-6">
                                    <BorderBeam />
                                    <div className="relative w-60 h-60 rounded-full overflow-hidden isolate">

                                        <BorderBeam
                                            size={200}
                                            duration={3}
                                            borderThickness={3}
                                            glowIntensity={2}
                                            beamBorderRadius={999}
                                            pauseOnHover
                                            reverse={true}
                                        />

                                        <img
                                            src={edu.image}
                                            alt={edu.institution}
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>
                                </div>


                                {/* Text Side */}
                                <div className="md:col-span-2">
                                    <CardHeader>
                                        <CardTitle>{edu.degree}</CardTitle>
                                        <p className="text-sm text-muted-foreground">
                                            {edu.institution} — {edu.duration}
                                        </p>
                                    </CardHeader>

                                    <CardContent className="text-sm text-foreground/80 space-y-2">
                                        <p>{edu.description}</p>
                                        <ul className="list-disc list-inside space-y-1">
                                            {edu.highlights.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </div>

                            </div>
                        </Card>

                    ))}
                </motion.div>
            </div>



            {/* Skills / Profile section */}
            <ProfessionalProfile />
        </motion.section>
    );
};

import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Globe, BookOpen, Code, Bug } from "lucide-react";
export const CareerTimeline = () => {

    const careerEvents = [
        {
            year: "2026 – Present",
            title: "Frontend Developer",
            subtitle: "Treeleaf Technology",
            description:
                "Working as a Frontend Developer, focusing on building responsive, user-friendly web interfaces using React.js, API integration and modern UI practices. Collaborating closely with designers and backend developers to deliver clean, scalable, and maintainable frontend solutions.",
            icon: <Code className="h-4 w-4 mr-2 text-primary" />,
        },
        {
            year: "2024 – 2025",
            title: "Independent Full-Stack Developer",
            subtitle: "Freelance & Academic Projects",
            description:
                "Developed multiple full-stack applications using the MERN stack. Notably built the Dhamma Quiz mobile application for Dhamma Digital, which is available on the Google Play Store. Worked on API integration, database design, authentication, and responsive UI development.",
            icon: <Code className="h-4 w-4 mr-2 text-primary" />,
        },
        {
            year: "2023 – 2024",
            title: "Quality Assurance Intern",
            subtitle: "Digital Pulz (PVT) Ltd",
            description:
                "Worked as a QA Intern performing manual testing and developing an automation testing framework using Selenium. Gained hands-on experience in test case creation, bug reporting, regression testing, and collaborating with developers to ensure application quality.",
            icon: <Bug className="h-4 w-4 mr-2 text-primary" />,
        },
        {
            year: "2019 – 2024",
            title: "BSc (Hons) in Information Technology",
            subtitle: "Sri Lanka Institute of Information Technology (SLIIT)",
            description:
                "Completed a Bachelor’s degree in Information Technology with strong academic grounding in software engineering, web development, databases, and system design.",
            icon: <BookOpen className="h-4 w-4 mr-2 text-primary" />,
        },
        {
            year: "2024",
            title: "Final Year Project – Sinhala Sign Language Translator",
            subtitle: "SLIIT",
            description:
                "Developed a Sinhala Sign Language Translator using machine learning techniques. Implemented sign language detection and translation logic using TensorFlow, focusing on accessibility and real-world impact.",
            icon: <Globe className="h-4 w-4 mr-2 text-primary" />,
        },
    ];


    return (
        <div id="career">
            <ScrollTimeline
                events={careerEvents}
                title="Career Journey"
                animationOrder="staggered"
                cardAlignment="alternating"
                cardVariant="elevated"
                parallaxIntensity={0.15}
                revealAnimation="fade"
                progressIndicator={true}
                lineColor="bg-primary/20"
                activeColor="bg-primary"
                progressLineWidth={3}
                progressLineCap="round"
            />
        </div>
    );
};

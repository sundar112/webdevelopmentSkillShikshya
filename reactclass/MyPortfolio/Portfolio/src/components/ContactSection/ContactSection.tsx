"use client";
// Import necessary icons
import { SiLinkedin, SiGithub, SiX, SiFacebook, SiInstagram } from "react-icons/si";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const contactMethods = [
    { type: "Email", value: "97sundarstha@gmail.com", icon: <FiMail /> },
    { type: "Phone", value: "+977 976 438 2903", icon: <FiPhone /> },
    { type: "Location", value: "Kathmandu Nepal", icon: <FiMapPin /> },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: <SiLinkedin />, url: "https://www.linkedin.com/in/sundar-shrestha-81233311a/" },
    { name: "GitHub", icon: <SiGithub />, url: "https://github.com/sundar112" },
    { name: "Facebook", icon: <SiFacebook />, url: "https://www.facebook.com/kspsuraj.shrestha/" },
    { name: "Instagram", icon: <SiInstagram />, url: "https://www.instagram.com/sun_dar_ksp/" },
  ];
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send("service_rhp75ml", "template_gh6s2lp", formData, "sPemOswtXmS0Je53N")
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("Failed to send message.");
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="relative max-w-6xl mx-auto px-6 py-20 space-y-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.2 } }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Contact Me
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Contact Methods */}
        <motion.div
          className="md:col-span-1 flex flex-col gap-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {contactMethods.map((contact, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/30 dark:bg-black/30 border border-black/10 dark:border-white/10 shadow-lg hover:shadow-xl cursor-pointer transition-all"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-2xl text-black dark:text-white">{contact.icon}</span>
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground dark:text-muted-foreground/70">{contact.type}</span>
                <span className="font-medium text-black dark:text-white">{contact.value}</span>
              </div>
            </motion.div>
          ))}

          {/* Social Links */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/30 dark:bg-black/30 border border-black/10 dark:border-white/10 shadow-lg hover:shadow-xl cursor-pointer transition-all"
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-2xl text-black dark:text-white">{social.icon}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="md:col-span-2 flex flex-col gap-6 bg-white/30 dark:bg-black/30 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
        >
          {/* Name Field */}
          <motion.div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="peer w-full px-4 pt-5 pb-2 rounded-xl bg-white/30 dark:bg-black/30 border border-black/20 dark:border-white/20 text-black dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white transition-all"
              placeholder="Your Name"
            />
            <label className="absolute left-4 top-2 text-muted-foreground dark:text-muted-foreground/70 text-sm transition-all 
                               peer-placeholder-shown:top-5 
                               peer-placeholder-shown:text-sm 
                               peer-focus:top-1 
                               peer-focus:text-xs">
              Your Name
            </label>
          </motion.div>

          {/* Email Field */}
          <motion.div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="peer w-full px-4 pt-5 pb-2 rounded-xl bg-white/30 dark:bg-black/30 border border-black/20 dark:border-white/20 text-black dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white transition-all"
              placeholder="Your Email"
            />
            <label className="absolute left-4 top-2 text-muted-foreground dark:text-muted-foreground/70 text-sm transition-all 
                               peer-placeholder-shown:top-5 
                               peer-placeholder-shown:text-sm 
                               peer-focus:top-1 
                               peer-focus:text-xs">
              Your Email
            </label>
          </motion.div>

          {/* Message Field */}
          <motion.div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="peer w-full px-4 pt-5 pb-2 rounded-xl bg-white/30 dark:bg-black/30 border border-black/20 dark:border-white/20 text-black dark:text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white transition-all"
              placeholder="Your Message"
            />
            <label className="absolute left-4 top-2 text-muted-foreground dark:text-muted-foreground/70 text-sm transition-all 
                               peer-placeholder-shown:top-5 
                               peer-placeholder-shown:text-sm 
                               peer-focus:top-1 
                               peer-focus:text-xs">
              Your Message
            </label>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="self-start px-8 py-3 bg-black text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all
                       dark:bg-white dark:text-black dark:border dark:border-white dark:hover:bg-gray-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>

          {status && <p className="mt-2 text-sm text-black dark:text-white">{status}</p>}
        </motion.form>
      </div>
    </motion.section>
  );
};

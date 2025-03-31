"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  GraduationCap,
  Code2,
} from "lucide-react";
import { InfoCard } from "@/components/InfoCard";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
          {/* Animated Shapes */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-blob animation-delay-4000" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Avatar className="w-48 h-48 mx-auto mb-6 border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20">
              <AvatarImage
                src="/pfp.jpg"
                alt="Neev Gupta"
                className="object-cover"
              />
              <AvatarFallback>NG</AvatarFallback>
            </Avatar>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          >
            Neev Gupta
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex items-center justify-center space-x-4 text-gray-300 mb-8"
          >
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Austin, TX</span>
            </div>
            <div className="flex items-center">
              <GraduationCap className="w-5 h-5 mr-2" />
              <span>High School Senior</span>
            </div>
            <div className="flex items-center">
              <Code2 className="w-5 h-5 mr-2" />
              <span>Aspiring Software Developer</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex justify-center space-x-6"
          >
            <a
              href="mailto:neevgupta.austin@gmail.com"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/guptaneev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/neevgupta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Skills
          </h2>
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">
                  Angular
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">
                  Git
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">
                  HTML/CSS
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">
                  Java
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">
                  JavaScript
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">
                  Python
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">
                  React
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard
              title="Software Engineering Intern"
              description="Zonda Home | June 2024 - August 2024"
              content={
                <ul className="list-disc list-inside text-gray-300">
                  <li>
                    Engineered {"Adoore"}, a housing comparison tool, utilizing
                    Angular, Java, REST API, HTML/CSS, and the BDX Web API
                  </li>
                  <li>
                    Spearheaded creation of Zonda&apos;s 2025 Internship Program
                  </li>
                </ul>
              }
              className="bg-gray-800/50 border-gray-700"
            />
            <InfoCard
              title="Student Researcher"
              description="The University of Texas at Dallas | June 2023 - August 2023"
              content={
                <ul className="list-disc list-inside text-gray-300">
                  <li>
                    Conducted in-depth analysis of sales and customer retention
                    datasets using SQL
                  </li>
                  <li>
                    Developed interactive dashboards with Tableau to visualize
                    key insights and trends
                  </li>
                </ul>
              }
              className="bg-gray-800/50 border-gray-700"
            />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard
              title="Adoore - City Comparison Tool"
              description="ZondaHome Internship Project"
              imageSrc="/adoore.png"
              imageAlt="Adoore City Comparison Tool Screenshot"
              content={
                <>
                  <ul className="list-disc list-inside text-gray-300 mb-4">
                    <li>
                      Developed a tool to compare housing metrics like QMI,
                      price trends, and price per square foot, helping buyers
                      and real estate professionals make informed decisions.{" "}
                    </li>
                  </ul>
                </>
              }
              tags={[
                "Angular",
                "Java",
                "REST API",
                "Chart.js",
                "Gradle",
                "Full-Stack Development",
                "API Integration",
              ]}
              githubLink="https://github.com/guptaneev/adoore"
              className="bg-gray-800/50 border-gray-700"
            />
            <InfoCard
              title="Neural Network Implementation"
              description="Inspired by Andrej Karpathy's Micrograd"
              imageSrc="/neuralnet.png"
              imageAlt="Neural Network Visualization"
              content={
                <>
                  <ul className="list-disc list-inside text-gray-300 mb-4">
                    <li>
                      Built a neural network from scratch with automatic
                      differentiation, visualized forward and backward passes to
                      explain complex operations, and validated correctness by
                      comparing with PyTorch for optimized performance.
                    </li>
                  </ul>
                </>
              }
              tags={[
                "Python",
                "NumPy",
                "Matplotlib",
                "PyTorch",
                "Neural Networks",
                "Backpropagation",
              ]}
              githubLink="https://github.com/guptaneev/karpathy_micrograd_from_scratch"
              className="bg-gray-800/50 border-gray-700"
            />
            <InfoCard
              title="Mood-Based Playlist Generator"
              description="IB Computer Science HL Project"
              imageSrc="/csia.png"
              imageAlt="Mood-Based Playlist Generator Screenshot"
              content={
                <>
                  <ul className="list-disc list-inside text-gray-300 mb-4">
                    <li>
                      Created a mood-based playlist generator with an
                      interactive GUI, implementing mood analysis algorithms and
                      JSON storage to deliver personalized playlists.
                    </li>
                  </ul>
                </>
              }
              tags={["Python", "tkinter", "customtkinter", "JSON", "REST API"]}
              githubLink="https://github.com/guptaneev/mood-based_playlist_generator"
              className="bg-gray-800/50 border-gray-700"
            />
            <InfoCard
              title="Endure - iOS Application"
              description="Fitness app for new gym-goers"
              content={
                <>
                  <ul className="list-disc list-inside text-gray-300 mb-4">
                    <li>
                      Developed a fitness app for new gym-goers with
                      personalized workouts, progress tracking, and calendar
                      tracking; attracted ~600 impressions in the first month.
                    </li>
                  </ul>
                </>
              }
              imageSrc="/endure.png"
              imageAlt="Endure App Screenshot"
              tags={[
                "iOS Development",
                "Figma",
                "App Store Connect",
                "Canva",
              ]}
              externalLink="https://apps.apple.com/us/app/endure/id6670519456"
              externalLinkText="App Store"
              className="bg-gray-800/50 border-gray-700"
            />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Education
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <InfoCard
              title="The University of Texas at Austin"
              description="August 2025 - May 2029"
              content={
                <ul className="list-disc list-inside text-gray-300">
                  <li>Bachelor of Science in Computer Science</li>
                </ul>
              }
              className="bg-gray-800/50 border-gray-700"
            />
            <InfoCard
              title="Westwood High School"
              description="August 2021 - May 2025"
              content={
                <ul className="list-disc list-inside text-gray-300">
                  <li>
                    Relevant Coursework: CS III, IB CS HL, AP CSP, AP CSA, AP
                    Calculus AB, AP Calculus BC
                  </li>
                </ul>
              }
              className="bg-gray-800/50 border-gray-700"
            />
          </div>
        </motion.section>
      </div>
    </div>
  );
}

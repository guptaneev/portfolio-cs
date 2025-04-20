"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { InfoCard } from "@/components/InfoCard";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <HeroSection />

      {/* Main Content */}
      <div className="w-full pt-12">
        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 px-4 sm:px-6 lg:px-8"
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
                <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">
                  ChromaDB
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">
                  Gemini API
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 px-4 sm:px-6 lg:px-8"
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

        {/* Projects Section */}
        <ProjectsSection />

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 px-4 sm:px-6 lg:px-8"
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

import { motion } from "framer-motion";
import { InfoCard } from "./InfoCard";

const projects = [
  {
    title: "Adoore - City Comparison Tool",
    description: "ZondaHome Internship Project",
    imageSrc: "/adoore.png",
    imageAlt: "Adoore City Comparison Tool Screenshot",
    content: (
      <ul className="list-disc list-inside text-gray-300 mb-4">
        <li>
          Developed a tool to compare housing metrics like QMI, price trends,
          and price per square foot, helping buyers and real estate
          professionals make informed decisions.
        </li>
      </ul>
    ),
    tags: [
      "Angular",
      "Java",
      "REST API",
      "Chart.js",
      "Gradle",
      "Full-Stack Development",
      "API Integration",
    ],
    githubLink: "https://github.com/guptaneev/adoore",
  },
  {
    title: "PeCo - Generative AI in the Gym",
    description: "Gen AI Intensive Course Capstone Project",
    imageSrc: "/peco.jpg",
    imageAlt: "PeCo Project Screenshot",
    content: (
      <>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>
            Built a personal AI coach for gym-goers using prompt engineering,
            embeddings, RAG, and grounding via LangChain, Gemini API, and
            ChromaDB
          </li>
        </ul>
        <a
          href="https://www.youtube.com/watch?v=FMurg0jzzXQ"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          ▶ Watch the Demo
        </a>
        <br />
        <a
          href="https://www.linkedin.com/pulse/how-can-we-use-generative-ai-gym-neev-gupta-iurnc/?trackingId=NTVZZCONS2eOJiMeSGJSww%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          ▶ Check out the blogpost
        </a>
      </>
    ),
    tags: ["Python", "LangChain", "Gemini API", "RAG", "ChromaDB"],
    externalLink:
      "https://www.kaggle.com/code/guptaneev/peco-gen-ai-intensive-course-capstone",
    externalLinkText: "Kaggle Notebook",
  },
  {
    title: "Mood-Based Playlist Generator",
    description: "IB Computer Science HL Project",
    imageSrc: "/csia.png",
    imageAlt: "Mood-Based Playlist Generator Screenshot",
    content: (
      <ul className="list-disc list-inside text-gray-300 mb-4">
        <li>
          Created a mood-based playlist generator with an interactive GUI,
          implementing mood analysis algorithms and JSON storage to deliver
          personalized playlists.
        </li>
      </ul>
    ),
    tags: ["Python", "tkinter", "customtkinter", "JSON", "REST API"],
    githubLink: "https://github.com/guptaneev/mood-based_playlist_generator",
  },
  {
    title: "Endure - iOS Application",
    description: "Fitness app for new gym-goers",
    imageSrc: "/endure.png",
    imageAlt: "Endure App Screenshot",
    content: (
      <ul className="list-disc list-inside text-gray-300 mb-4">
        <li>
          Developed a fitness app for new gym-goers with personalized workouts,
          progress tracking, and calendar tracking; attracted ~600 impressions
          in the first month.
        </li>
      </ul>
    ),
    tags: ["iOS Development", "Figma", "App Store Connect", "Canva"],
  },
];

export function ProjectsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-12 w-full"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <InfoCard
              {...project}
              className="bg-gray-800/50 border-gray-700 h-full"
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

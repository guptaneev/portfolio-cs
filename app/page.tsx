import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"
import { InfoCard } from "@/components/InfoCard"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <Avatar className="w-48 h-48 mx-auto mb-4 border-4 border-white shadow-lg">
            <AvatarImage src="/pfp.jpg" alt="Neev Gupta" className="object-cover" />
            <AvatarFallback>NG</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Neev Gupta
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Aspiring Software Developer | High School Senior | Austin, TX
          </p>
          <div className="flex justify-center space-x-4">
            <a href="mailto:neevgupta.austin@gmail.com" className="text-gray-600 hover:text-gray-900">
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/guptaneev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/neevgupta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2 justify-center">
              <Badge>Angular</Badge>
              <Badge>Git</Badge>
              <Badge>HTML/CSS</Badge>
              <Badge>Java</Badge>
              <Badge>JavaScript</Badge>
              <Badge>Neon</Badge>
              <Badge>Next.js</Badge>
              <Badge>PostgreSQL</Badge>
              <Badge>Prisma ORM</Badge>
              <Badge>Python</Badge>
              <Badge>REST API</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard
              title="Software Engineering Intern"
              description="Zonda Home | June 2024 - August 2024"
              content={
                <ul className="list-disc list-inside text-gray-700">
                    <li>Engineered {"Adoore"}, a housing comparison tool, utilizing Angular, Java, REST API, HTML/CSS, and the BDX Web API</li>
                    <li>Spearheaded creation of Zonda's 2025 Internship Program</li>
                </ul>
              }
            />
            <InfoCard
              title="Student Researcher"
              description="The University of Texas at Dallas | June 2023 - August 2023"
              content={
                <ul className="list-disc list-inside text-gray-700">
                    <li>Conducted in-depth analysis of sales and customer retention datasets using SQL</li>
                    <li>Developed interactive dashboards with Tableau to visualize key insights and trends</li>
                </ul>
              }
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard
              title="Adoore - City Comparison Tool"
              description="ZondaHome Internship Project"
              imageSrc="/adoore.png"
              imageAlt="Adoore City Comparison Tool Screenshot"
              content={
                <>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>
                    Developed a tool to compare housing metrics like QMI, price trends, and price per square foot, helping buyers and real estate professionals make informed decisions.                    </li>
                  </ul>
                </>
              }
              tags={["Angular", "Java", "REST API", "Chart.js", "Gradle", "Full-Stack Development", "API Integration"]}
              githubLink="https://github.com/guptaneev/adoore"
            />
            <InfoCard
              title="Neural Network Implementation"
              description="Inspired by Andrej Karpathy's Micrograd"
              imageSrc="/neuralnet.png"
              imageAlt="Neural Network Visualization"
              content={
                <>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>
                    Built a neural network from scratch with automatic differentiation, visualized forward and backward passes to explain complex operations, and validated correctness by comparing with PyTorch for optimized performance.
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
                "Backpropagation"
              ]}
              githubLink="https://github.com/guptaneev/karpathy_micrograd_from_scratch"
            />
            <InfoCard
              title="Mood-Based Playlist Generator"
              description="IB Computer Science HL Project"
              imageSrc="/csia.png"
              imageAlt="Mood-Based Playlist Generator Screenshot"
              content={
                <>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>
                    Created a mood-based playlist generator with an interactive GUI, implementing mood analysis algorithms and JSON storage to deliver personalized playlists.
                    </li>
                  </ul>
                </>
              }
              tags={["Python", "tkinter", "customtkinter", "JSON", "REST Api"]}
              githubLink="https://github.com/guptaneev/mood-based_playlist_generator"
            />
            <InfoCard
              title="Endure - iOS Application"
              description="Fitness app for new gym-goers"
              content={
                <>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>
                    Developed a fitness app for new gym-goers with personalized workouts, progress tracking, and calendar tracking; attracted ~600 impressions in the first month.
                    </li>
                  </ul>
                </>
              }
              imageSrc="/endure.png"
              imageAlt="Endure App Screenshot"
              tags={["Swift", "iOS Development", "Figma", "App Store Connect", "Canva"]}
              externalLink="https://apps.apple.com/us/app/endure/id6670519456"
              externalLinkText="App Store"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
          <InfoCard
            title="Westwood High School"
            description="August 2021 - May 2025"
            content={
              <ul className="list-disc list-inside text-gray-700">
                <li>GPA: 4.0/4.0 (UW), 5.802/5.0 (W) | Rank: 38/700</li>
                <li>SAT: 1550/1600 | National Merit Commended Scholar</li>
                <li>AP Scholar with Distinction (8 exams)</li>
                <li>Relevant Coursework: CS III, IB CS HL, AP CSP, AP CSA, AP Calculus AB, AP Calculus BC</li>
              </ul>
            }
          />
        </section>
      </div>
    </div>
  )
}

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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Neev Gupta</h1>
          <p className="text-xl text-gray-600 mb-4">Aspiring Software Developer | High School Senior</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="space-y-6">
            <InfoCard
              title="Neural Network Implementation"
              description="Inspired by Andrej Karpathy&apos;s Micrograd"
              imageSrc="/neuralnet.png"
              imageAlt="Neural Network Visualization"
              content={
                <>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>
                      Engineered a neural network and computational graph from scratch, implementing backpropagation
                      with automatic differentiation and efficiently calculating gradients via the chain rule.
                    </li>
                    <li>
                      Developed data visualization tools to graphically depict the forward and backward passes,
                      showcasing expertise in explaining complex neural network operations.
                    </li>
                    <li>
                      Validated model correctness by comparing with PyTorch results while optimizing performance through
                      iterative gradient descent.
                    </li>
                  </ul>
                </>
              }
              tags={[
                "Python",
                "NumPy",
                "Matplotlib",
                "Neural Networks",
                "Backpropagation",
                "Gradient Descent",
                "Computational Graphs",
              ]}
              githubLink="https://github.com/guptaneev/karpathy_micrograd_from_scratch"
            />
            <InfoCard
              title="Mood-Based Playlist Generator (In Progress)"
              description="IB Computer Science HL Project"
              imageSrc="/csia.png"
              imageAlt="Mood-Based Playlist Generator Screenshot"
              content={
                <>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>
                      Designed and developed a mood-based playlist generator, showcasing end-to-end software development
                      skills with detailed technical documentation (&quot;rationale&quot;, &quot;wireframes&quot;,
                      &quot;UML diagrams&quot;, and &quot;database models&quot;).
                    </li>
                    <li>
                      Built an interactive and user-friendly GUI using Python and the customtkinter library, ensuring
                      seamless user engagement.
                    </li>
                    <li>
                      Implemented mood analysis algorithms and JSON-based storage systems to generate personalized
                      playlists efficiently based on user inputs.
                    </li>
                  </ul>
                </>
              }
              tags={["Python", "customtkinter", "JSON", "GUI Development", "Algorithm Design", "Database Modeling"]}
              githubLink="https://github.com/guptaneev/mood-based_playlist_generator"
            />
            <InfoCard
              title="Endure - iOS Application"
              description="Fitness app for new gym-goers"
              content={
                <>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>
                      Designed and developed a fitness app tailored for new gym-goers, featuring personalized workout
                      plans, progress tracking, and social sharing functionality.
                    </li>
                    <li>Utilized local storage solutions to ensure seamless user data management and accessibility.</li>
                    <li>
                      Achieved ~600 impressions in the first month, highlighting the app&apos;s strong market appeal and
                      user engagement.
                    </li>
                  </ul>
                </>
              }
              imageSrc="/endure.png"
              imageAlt="Endure App Screenshot"
              tags={["Swift", "iOS Development", "UI/UX Design", "Data Management"]}
              externalLink="https://apps.apple.com/us/app/endure/id6670519456"
              externalLinkText="App Store"
            />
            <InfoCard
              title="Adoore - City Comparison Tool"
              description="ZondaHome Internship Project"
              imageSrc="/adoore.png"
              imageAlt="Adoore City Comparison Tool Screenshot"
              content={
                <>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    <li>
                      Designed a cross-country city comparison tool, leveraging the BDX NewHomeSource Web API to deliver
                      insights on housing metrics like price per square foot, quick move-in percentages, and community
                      amenities.
                    </li>
                    <li>
                      Built an interactive Angular-based front-end and a robust Java back-end, incorporating Chart.js
                      for intuitive data visualizations that cater to home buyers and real estate professionals.
                    </li>
                    <li>
                      Developed API integration and efficient data processing workflows, enabling precise and dynamic
                      comparisons across cities.
                    </li>
                  </ul>
                </>
              }
              tags={["Angular", "Java", "REST API", "Chart.js", "Gradle", "Full-Stack Development", "API Integration"]}
              githubLink="https://github.com/guptaneev/adoore"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoCard
              title="Software Engineering Intern"
              description="Zonda Home | June 2024 - August 2024"
              content={
                <ul className="list-disc list-inside text-gray-700">
                  <li>Developed &quot;Adoore&quot;, an open-source housing comparison tool</li>
                  <li>Spearheaded creation of Zonda&apos;s 2025 Internship Program</li>
                </ul>
              }
            />
            <InfoCard
              title="Student Researcher"
              description="The University of Texas at Dallas | June 2023 - August 2023"
              content={
                <ul className="list-disc list-inside text-gray-700">
                  <li>Analyzed Walmart&apos;s sales and customer retention datasets</li>
                  <li>Built interactive dashboards using Tableau and SQL</li>
                </ul>
              }
            />
            <InfoCard
              title="FTC Team Atl-Atl Lead"
              description="Westwood FTC Robotics | September 2021 - Present"
              content={
                <ul className="list-disc list-inside text-gray-700">
                  <li>Led team to Semi-Regionals (Top 35 in Texas), focusing on robot design and programming</li>
                  <li>
                    Developed autonomous programs using Java, implementing path planning and computer vision algorithms
                  </li>
                  <li>
                    Designed custom robot components using CAD software and 3D printing for competition optimization
                  </li>
                </ul>
              }
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

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-2">
                <Badge>Python</Badge>
                <Badge>Java</Badge>
                <Badge>Swift</Badge>
                <Badge>JavaScript</Badge>
                <Badge>HTML/CSS</Badge>
                <Badge>Angular</Badge>
                <Badge>SQL</Badge>
                <Badge>Git</Badge>
                <Badge>REST API</Badge>
                <Badge>Neural Networks</Badge>
                <Badge>Machine Learning</Badge>
                <Badge>iOS Development</Badge>
                <Badge>Full-Stack Development</Badge>
                <Badge>Data Visualization</Badge>
                <Badge>GUI Development</Badge>
                <Badge>Algorithm Design</Badge>
                <Badge>Database Modeling</Badge>
                <Badge>Robotics</Badge>
                <Badge>CAD</Badge>
                <Badge>3D Printing</Badge>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}


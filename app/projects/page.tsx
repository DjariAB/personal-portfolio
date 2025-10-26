import { Card } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

const projects = [
  {
    id: "design-system",
    title: "Design System",
    description: "Comprehensive component library with accessibility at its core",
    tech: ["React", "TypeScript", "Tailwind"],
    image: "/design-system-interface.jpg",
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Full-stack marketplace with real-time inventory management",
    tech: ["Next.js", "PostgreSQL", "Stripe"],
    image: "/ecommerce-dashboard.png",
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "Real-time data visualization and reporting interface",
    tech: ["React", "D3.js", "Node.js"],
    image: "/analytics-dashboard-charts.png",
  },
  {
    id: "mobile-app",
    title: "Mobile App",
    description: "Cross-platform application for task management",
    tech: ["React Native", "Firebase", "Redux"],
    image: "/mobile-app-interface.png",
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container-max py-24">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-mono font-bold">Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A selection of work spanning design, development, and everything in between.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <Card className="group cursor-pointer border border-border hover:border-foreground/50 transition-all duration-200 overflow-hidden rounded-2xl">
                  <div className="aspect-video bg-muted overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 bg-muted text-foreground rounded-full border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

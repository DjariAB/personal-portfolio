import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

const projectDetails: Record<string, any> = {
  "ecommerce-platform": {
    title: "E-Commerce Platform",
    tagline: "Full-stack marketplace with real-time inventory management",
    problem: "Existing platform had poor performance and limited scalability for growing merchant base.",
    solution:
      "Built modern full-stack platform with real-time updates, optimized search, and seamless checkout experience.",
    role: "Full Stack Engineer",
    tech: ["Next.js", "PostgreSQL", "Stripe", "Redis", "TypeScript"],
    image: "/ecommerce-dashboard.png",
    gallery: ["/product-listing.jpg", "/checkout-flow.jpg", "/modern-admin-dashboard.png"],
    liveUrl: "#",
    githubUrl: "#",
    type: "web",
  },
  "mobile-app": {
    title: "Mobile App",
    tagline: "Cross-platform application for task management",
    problem: "Users needed a lightweight, offline-first task management solution.",
    solution: "Built cross-platform app with offline support, real-time sync, and intuitive interface.",
    role: "Mobile Developer",
    tech: ["React Native", "Firebase", "Redux", "TypeScript"],
    image: "/mobile-app-interface.png",
    gallery: ["/task-list-screen.jpg", "/detail-view.jpg", "/settings-screen.png"],
    liveUrl: "#",
    githubUrl: "#",
    type: "web",
  },
  "isometric-room": {
    title: "3D Isometric Room",
    tagline: "A detailed isometric room scene with lighting and textures",
    description:
      "This isometric room showcases advanced 3D modeling techniques with carefully crafted lighting and realistic material textures. The scene features a modern bedroom workspace with professional lighting setup, wooden flooring, and thoughtfully placed furniture including a desk with dual monitors, comfortable bed, storage units, and ambient lighting elements.",
    image: "/images/rendered-20room.png",
    videoUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/edited%20export-TB1DkMO5teM8j3ScaKkOb2GEy9jNaf.mp4",
    downloadUrl: "/downloads/isometric-room.blend",
    type: "3d",
  },
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projectDetails[params.id]

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container-max py-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Project not found</h1>
            <Link href="/projects">
              <Button>Back to Projects</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (project.type === "3d") {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Hero Image */}
          <div className="w-full h-96 md:h-[500px] bg-muted overflow-hidden">
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div className="container-max py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Title */}
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-6xl font-bold">{project.title}</h1>
                  <p className="text-xl text-muted-foreground">{project.tagline}</p>
                </div>

                {/* Description */}
                <div>
                  <h2 className="text-2xl font-bold mb-3">About</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                {/* Video Preview */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Render Preview</h2>
                  <div className="aspect-video bg-black rounded-2xl overflow-hidden">
                    <video src={project.videoUrl} controls className="w-full h-full object-cover" preload="metadata" />
                  </div>
                </div>

                {/* Download */}
                <div>
                  <a href={project.downloadUrl} download>
                    <Button className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-2xl py-6 text-base">
                      Download .blend File
                    </Button>
                  </a>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                <div className="divider" />

                <Link href="/projects">
                  <Button variant="outline" className="w-full rounded-2xl border-foreground bg-transparent">
                    Back to Projects
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Image */}
        <div className="w-full h-96 md:h-[500px] bg-muted overflow-hidden">
          <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="container-max py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Title */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold">{project.title}</h1>
                <p className="text-xl text-muted-foreground">{project.tagline}</p>
              </div>

              {/* Problem & Solution */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-3">Problem</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">Solution</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Gallery */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.gallery.map((image: string, idx: number) => (
                    <div key={idx} className="aspect-video bg-muted rounded-2xl overflow-hidden">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Gallery ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-8">
                <Link href={project.liveUrl}>
                  <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-2xl">
                    View Live
                  </Button>
                </Link>
                <Link href={project.githubUrl}>
                  <Button variant="outline" className="rounded-2xl border-foreground bg-transparent">
                    GitHub
                  </Button>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="divider" />

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-3">Role</h3>
                <p className="text-lg">{project.role}</p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech: string) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1 bg-muted text-foreground rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="divider" />

              <Link href="/projects">
                <Button variant="outline" className="w-full rounded-2xl border-foreground bg-transparent">
                  Back to Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function About() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "Design Systems",
    "Accessibility",
    "UI/UX Design",
    "Figma",
    "Web Performance",
    "Testing",
  ]

  const timeline = [
    { year: "2024", title: "Senior Designer & Developer", company: "Current Role" },
    { year: "2022", title: "Full Stack Engineer", company: "Tech Company" },
    { year: "2020", title: "Frontend Developer", company: "Startup" },
    { year: "2018", title: "Junior Developer", company: "Agency" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container-max py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-24">
              <div className="space-y-3">
                <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Navigation</div>
                <div className="space-y-2">
                  <div className="text-lg font-bold">About</div>
                  <div className="text-lg text-muted-foreground">Skills</div>
                  <div className="text-lg text-muted-foreground">Timeline</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* About Section */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold">About</h1>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a designer and developer passionate about creating accessible, minimal digital experiences. With a
                  background in both design and engineering, I bridge the gap between aesthetics and functionality.
                </p>
                <p>
                  My work focuses on building thoughtful interfaces that prioritize user experience and accessibility. I
                  believe great design is invisible—it works so well that users don't think about it.
                </p>
                <p>
                  When I'm not designing or coding, you can find me reading about design systems, contributing to open
                  source, or exploring new technologies that push the boundaries of web development.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Skills</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-muted text-foreground rounded-full border border-border font-mono text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Timeline Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Timeline</h2>
              <div className="space-y-8">
                {timeline.map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="text-sm font-bold text-muted-foreground min-w-16">{item.year}</div>
                    <div className="flex-1 pb-8 border-l border-border pl-6">
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

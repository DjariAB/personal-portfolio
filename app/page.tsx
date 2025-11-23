import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container-max py-24 md:py-32">
        <div className="space-y-8">
          {/* Logo */}
          <div className="text-sm font-mono tracking-widest text-muted-foreground">{"< portfolio />"}</div>

          {/* Hero Section */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-mono font-bold tracking-tight leading-tight">
              Designer &<br />
              Developer
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-mono leading-relaxed">
              Crafting minimal, accessible digital experiences with thoughtful design and robust engineering.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <Link href="/projects">
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 font-mono text-base px-8 py-6 rounded-2xl"
              >
                View Work
              </Button>
            </Link>
          </div>

          {/* Subtle divider */}
          <div className="pt-16">
            <div className="divider" />
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8">
            <div>
              <div className="text-2xl font-bold">12+</div>
              <div className="text-sm text-muted-foreground">Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold">5+</div>
              <div className="text-sm text-muted-foreground">Years</div>
            </div>
            <div>
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm text-muted-foreground">Accessible</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

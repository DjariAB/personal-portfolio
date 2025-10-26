import Link from "next/link"

export default function Header() {
  return (
    <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
      <div className="container-max py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-sm font-bold tracking-widest hover:text-muted-foreground transition-colors">
          {"< portfolio />"}
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/projects" className="text-sm font-mono hover:text-muted-foreground transition-colors">
            Projects
          </Link>
          <Link href="/about" className="text-sm font-mono hover:text-muted-foreground transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-mono hover:text-muted-foreground transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Indicator */}
        <div className="md:hidden text-sm font-mono">Menu</div>
      </div>
    </header>
  )
}

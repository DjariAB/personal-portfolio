export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-max py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-widest">About</h3>
            <p className="text-sm text-muted-foreground">
              Designer and developer crafting minimal, accessible digital experiences.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-widest">Links</h3>
            <div className="space-y-1">
              <div>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  GitHub
                </a>
              </div>
              <div>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Twitter
                </a>
              </div>
              <div>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-widest">Contact</h3>
            <a
              href="mailto:hello@example.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              hello@example.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="divider mb-8" />

        {/* Copyright */}
        <div className="text-xs text-muted-foreground text-center">© {currentYear} Portfolio. All rights reserved.</div>
      </div>
    </footer>
  )
}

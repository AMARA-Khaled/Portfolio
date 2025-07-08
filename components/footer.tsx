export default function Footer() {
  return (
    <footer className="py-8 border-t bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">© 2025 Amara Khaled Walid. All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex flex-col md:flex-row gap-4 text-sm text-muted-foreground">
              <a href="tel:+213776202361" className="hover:text-primary transition-colors">
               0776202361
              </a>
              <a href="mailto:ok_amara@esi.dz" className="hover:text-primary transition-colors">
               ok_amara@esi.dz
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { Scissors } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        
        {/* Bagian Logo Barber */}
        <div className="flex items-center gap-2">
          <Scissors className="h-5 w-5 text-primary" />
          <span className="font-display tracking-widest">TYM BARBERS</span>
        </div>

        {/* Bagian Logo Instagram */}
        <div className="flex gap-4 text-muted-foreground">
          <a href="https://www.instagram.com/tymbarbers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-primary">
            {/* Tag <Instagram /> diganti langsung dengan SVG di bawah ini */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-5 w-5"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} TYM BARBERS. All rights reserved.
        </p>
        
      </div>
    </footer>
  );
}
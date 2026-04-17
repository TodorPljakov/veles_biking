import Image from "next/image"
import { Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/club-logo.png"
              alt="Велес Бајкинг Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-medium text-foreground">Велес Бајкинг</p>
              <p className="text-sm text-muted-foreground">www.velesbiking.mk</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/bikingveles"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Visit our Facebook page"
            >
              <Facebook className="h-5 w-5" />
              <span className="text-sm">Veles Biking</span>
            </a>
            <a
              href="https://instagram.com/bikingveles"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Visit our Instagram page"
            >
              <Instagram className="h-5 w-5" />
              <span className="text-sm">@bikingveles</span>
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ЗГ Велес Бајкинг. All rides welcome.
          </p>
        </div>
      </div>
    </footer>
  )
}

import React from "react";
import { NavLink, Link } from "react-router-dom";
import { HeartHandshake, PhoneCall } from "lucide-react";
import Container from "./ui/Container";
import Button from "./ui/Button";
import ThemeToggle from "./ThemeToggle";
import { JOIN } from "../shared/join";
import logo from "../assets/power-logo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/our-creed", label: "Our Creed" },
  { to: "/topics-2026", label: "2026 Topics" },
  { to: "/our-staff", label: "Our Staff" },
  { to: "/contact", label: "Contact" },
];

function NavItem({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      end={to === "/"}
      className={({ isActive }) =>
        [
          "relative px-3 py-2 rounded-2xl text-sm font-semibold transition",
          isActive
            ? "text-power-navy dark:text-white bg-white/70 dark:bg-white/10"
            : "text-power-ink/70 dark:text-white/70 hover:text-power-ink dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/10",
        ].join(" ")
      }
    >
      {label}
    </NavLink>
  );
}

export default function SiteShell({ children }) {
  const [open, setOpen] = React.useState(false);

  // ✅ Close mobile menu if you resize to desktop (prevents “stuck open” state)
  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="min-h-full flex flex-col">
      {/* Top ribbon */}
      <div className="bg-gradient-to-r from-power-navy via-power-blue to-power-navy text-white">
        <Container className="py-2 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <a
              href={JOIN.zoomUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white/90 underline decoration-white/30 hover:decoration-white hover:text-white transition"
              title="Join on Zoom"
            >
              <PhoneCall className="h-4 w-4" />
              Join on Zoom
            </a>
          </div>

          <a
            className="text-sm text-white/90 hover:text-white underline decoration-white/30 hover:decoration-white"
            href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=UD5Z7E5WALD3C&ssrt=1767408433617"
            target="_blank"
            rel="noreferrer"
            title="Donation link"
          >
            Support the Ministry
          </a>
        </Container>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40">
        <div className="glass border-b border-slate-200/60 dark:border-white/10">
          <Container className="py-3 flex items-center justify-between gap-3">
            <Link to="/" className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-power-cyan/30 to-power-green/20 blur-md" />
                <img
                  src={logo}
                  alt="POWER Prayer Line logo"
                  className="relative h-12 sm:h-14 w-auto shrink-0 object-contain"
                  draggable={false}
                />
              </div>
              <div className="leading-tight">
                <div className="text-lg font-black tracking-tight text-power-ink dark:text-white">
                  POWER Prayer Line
                </div>
                <div className="text-xs text-power-ink/55 dark:text-white/60">
                  Promoters Of the Word Empowering Reality
                </div>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-2">
              <nav className="flex items-center gap-2">
                {navItems.map((it) => (
                  <NavItem key={it.to} {...it} />
                ))}
              </nav>
              <ThemeToggle />
              <Button as={Link} to="/contact" variant="primary" className="px-4 py-2.5">
                <HeartHandshake className="h-4 w-4" />
                Prayer Request
              </Button>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                className="glass inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold text-power-ink dark:text-white hover:bg-white/80 dark:hover:bg-white/10 transition"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-label="Toggle menu"
                type="button"
              >
                Menu
              </button>
            </div>
          </Container>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="md:hidden glass border-b border-slate-200/60 dark:border-white/10">
            <Container className="py-4 flex flex-col gap-2">
              <div className="grid gap-1">
                {navItems.map((it) => (
                  <NavItem key={it.to} {...it} onClick={() => setOpen(false)} />
                ))}
              </div>

              {/* ✅ Add Zoom join CTA on mobile, since ribbon can wrap/feel hidden */}
              <Button
                as="a"
                href={JOIN.zoomUrl}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                onClick={() => setOpen(false)}
              >
                <PhoneCall className="h-4 w-4" />
                Join on Zoom
              </Button>

              <Button as={Link} to="/contact" variant="primary" onClick={() => setOpen(false)}>
                <HeartHandshake className="h-4 w-4" />
                Prayer Request
              </Button>
            </Container>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="flex-1">
        <div className="relative">
          <div className="absolute inset-0 bg-hero-glow dark:bg-mesh-dark" aria-hidden="true" />
          <div
            className="absolute inset-0 opacity-[0.06] dark:opacity-[0.10]"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(2,6,23,1) 1px, transparent 0)",
              backgroundSize: "22px 22px",
            }}
          />
          <Container className="py-10 md:py-14 relative">{children}</Container>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/60 dark:border-white/10 glass">
        <Container className="py-10 flex flex-col items-center text-center gap-2">
          <div className="font-black text-lg text-power-ink dark:text-white">
            POWER Prayer Line
          </div>

          <div className="text-sm text-power-ink/70 dark:text-white/70">
            Promoters Of the Word Empowering Reality
          </div>

          <div className="mt-4 text-xs text-power-ink/50 dark:text-white/50">
            © 2005–2026 PowerPrayerLine.org. All rights reserved.
          </div>
        </Container>
      </footer>

    </div>
  );
}

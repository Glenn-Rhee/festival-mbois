"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import Image from "next/image";
import { X, Globe, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang Kami", href: "#about" },
  { label: "Program", href: "#program" },
  { label: "Registrasi", href: "#registration" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState("ID");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className={cn(
          "font-onest fixed top-0 left-0 z-50 flex w-full flex-col items-center transition-all duration-500 ease-in-out",
          isScrolled
            ? "bg-brand-violet/60 pt-0 shadow-lg shadow-black/20 backdrop-blur-xl"
            : "bg-transparent pt-6",
        )}
      >
        <nav
          className={cn(
            "mx-auto flex items-center justify-between transition-all duration-500 ease-in-out",
            isScrolled
              ? "w-full rounded-none border border-transparent bg-transparent px-6 py-[25px] lg:px-[72px]"
              : "bg-brand-plum/30 w-[calc(100%-48px)] rounded-3xl border border-white/15 px-5 py-6 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-2xl lg:w-[calc(100%-144px)] lg:px-6 lg:py-[25px]",
          )}
        >
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-3"
            onClick={handleNavClick}
          >
            <Image
              src={"/logo_festival_mbois_yellow.svg"}
              alt="logo"
              width={40}
              height={40}
              className="h-auto w-auto"
            />
            <div className="flex flex-col">
              <span className="text-neutral-off-white text-2xl leading-tight font-semibold tracking-tight">
                Festival Mbois 11
              </span>
              <span className="text-neutral-off-white text-xs font-medium tracking-wider capitalize">
                Malang Menyala
              </span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-lg font-medium text-white/85 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA & Language */}
          <div className="hidden cursor-pointer items-center gap-8 lg:flex">
            <button
              type="button"
              onClick={() => setLanguage(language === "ID" ? "EN" : "ID")}
              className="flex cursor-pointer items-center gap-2 text-white/85 transition-colors hover:text-white"
            >
              <Globe className="h-5 w-5" />
              <span className="text-lg font-medium">{language}</span>
            </button>

            <Link
              href="#login"
              className={cn(
                "border-brand-pink-pastel text-brand-pink-pastel rounded-xl border px-6 py-4 text-lg font-medium transition-all hover:bg-white/10",
              )}
            >
              Masuk
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isMobileMenuOpen}
            className={cn(
              "relative z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-white/80 transition-opacity duration-300 hover:text-white lg:hidden",
              isMobileMenuOpen
                ? "pointer-events-none opacity-0"
                : "opacity-100",
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="flex h-5 w-6 flex-col items-center justify-center gap-1.5">
              <span
                className={cn(
                  "h-0.5 w-full rounded-full bg-current transition-all duration-300",
                  isMobileMenuOpen && "translate-y-2 rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full rounded-full bg-current transition-all duration-300",
                  isMobileMenuOpen && "scale-x-0 opacity-0",
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full rounded-full bg-current transition-all duration-300",
                  isMobileMenuOpen && "-translate-y-2 -rotate-45",
                )}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "bg-neutral-charcoal fixed inset-0 z-60 flex flex-col justify-between px-6 py-8 backdrop-blur-2xl transition-all duration-500 lg:hidden",
          isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        {/* Top Header Row (Brand on Left, Close Button on Right) */}
        <div className="flex w-full items-center justify-between px-2 pt-2">
          {/* Brand (Logo + Text) */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo_festival_mbois_yellow.svg"
              alt="Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <div className="flex flex-col text-left">
              <span className="text-lg leading-tight font-semibold tracking-tight text-white">
                Festival Mbois 11
              </span>
              <span className="text-[10px] font-medium tracking-wider text-white/70 capitalize">
                Malang Menyala
              </span>
            </div>
          </div>

          {/* Close button at top-right */}
          <button
            type="button"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-white/10 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Middle: Menu Links & Masuk Button */}
        <div className="mt-4 flex w-full flex-1 flex-col items-center justify-center gap-8">
          {/* Nav Links */}
          <div className="flex flex-col items-center gap-7">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className={cn(
                  "text-lg font-medium text-white/80 transition-all duration-300 hover:text-white",
                  isMobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0",
                )}
                style={{
                  transitionDelay: isMobileMenuOpen
                    ? `${150 + i * 50}ms`
                    : "0ms",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Lang & Masuk CTA */}
          <div className="mt-4 flex w-full max-w-[280px] flex-col gap-6">
            <div
              className={cn(
                "flex items-center justify-center gap-6 transition-all duration-300",
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0",
              )}
              style={{
                transitionDelay: isMobileMenuOpen
                  ? `${150 + navLinks.length * 50}ms`
                  : "0ms",
              }}
            >
              <button
                type="button"
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors",
                  language === "ID"
                    ? "text-white"
                    : "text-white/50 hover:text-white/80",
                )}
                onClick={() => setLanguage("ID")}
              >
                <Globe className="h-4 w-4" />
                ID
              </button>
              <div className="h-4 w-px bg-white/20"></div>
              <button
                type="button"
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors",
                  language === "EN"
                    ? "text-white"
                    : "text-white/50 hover:text-white/80",
                )}
                onClick={() => setLanguage("EN")}
              >
                <Globe className="h-4 w-4" />
                EN
              </button>
            </div>

            <Link
              href="#login"
              onClick={handleNavClick}
              className={cn(
                "border-brand-pink-pastel text-brand-pink-pastel flex w-full items-center justify-center rounded-2xl border bg-transparent py-4 text-sm font-semibold transition-all hover:bg-white/10",
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0",
              )}
              style={{
                transitionDelay: isMobileMenuOpen
                  ? `${150 + (navLinks.length + 1) * 50}ms`
                  : "0ms",
              }}
            >
              Masuk
            </Link>
          </div>
        </div>

        {/* Bottom: Copyright Footer */}
        <div className="pb-2 text-center">
          <p className="text-[11px] font-light tracking-wide text-white/50">
            © 2026 Festival Mbois Malang
          </p>
        </div>
      </div>
    </>
  );
}

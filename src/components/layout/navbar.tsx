"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import Image from "next/image";

const navLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang Kami", href: "#about" },
  { label: "Program", href: "#program" },
  { label: "Registrasi", href: "#registration" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            ? "bg-[#120d22]/60 pt-0 shadow-lg shadow-black/20 backdrop-blur-xl"
            : "bg-transparent pt-6",
        )}
      >
        <nav
          className={cn(
            "mx-auto flex items-center justify-between transition-all duration-500 ease-in-out",
            isScrolled
              ? "w-full rounded-none border border-transparent bg-transparent px-6 py-[25px] lg:px-[72px]"
              : "w-[calc(100%-48px)] rounded-3xl border border-white/15 bg-[#1a1126]/30 px-5 py-6 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-2xl lg:w-[calc(100%-144px)] lg:px-6 lg:py-[25px]",
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
              <span className="text-xl leading-tight font-semibold tracking-tight text-white/90">
                Festival Mbois 11
              </span>
              <span className="text-xs font-medium tracking-wider text-white/90 capitalize">
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

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="#login"
              className={cn(
                "rounded-xl border border-[#FFBAEB] px-6 py-4 text-lg font-medium text-[#FFBAEB] transition-all hover:bg-white/10",
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
              "relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-white/80 hover:text-white lg:hidden transition-opacity duration-300",
              isMobileMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
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
          "fixed inset-0 z-60 bg-[#1e1e1e] backdrop-blur-2xl transition-all duration-500 lg:hidden px-6 py-8 flex flex-col justify-between",
          isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        {/* Top Header Row (Brand on Left, Close Button on Right) */}
        <div className="flex items-center justify-between w-full pt-2 px-2">
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
              <span className="text-lg font-semibold tracking-tight text-white leading-tight">
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
            className="flex items-center justify-center h-10 w-10 rounded-xl bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Middle: Menu Links & Masuk Button */}
        <div className="flex flex-col items-center justify-center flex-1 gap-8 w-full mt-4">
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
                  transitionDelay: isMobileMenuOpen ? `${150 + i * 50}ms` : "0ms",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Masuk CTA Button */}
          <div className="w-full max-w-[280px] mt-4">
            <Link
              href="#login"
              onClick={handleNavClick}
              className={cn(
                "flex items-center justify-center w-full rounded-2xl border border-[#FFBAEB] bg-transparent py-4 text-sm font-semibold text-[#FFBAEB] transition-all hover:bg-white/10",
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
              Masuk
            </Link>
          </div>
        </div>

        {/* Bottom: Copyright Footer */}
        <div className="text-center pb-2">
          <p className="text-[11px] font-light text-white/50 tracking-wide">
            © 2026 Festival Mbois Malang
          </p>
        </div>
      </div>
    </>
  );
}

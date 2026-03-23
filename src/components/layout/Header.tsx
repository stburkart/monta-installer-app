import Link from "next/link";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 bg-white border-b border-monta-grey-light"
      style={{ zIndex: "var(--z-sticky)" }}
    >
      <div className="container-monta flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <MontaLogo />
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/dashboard">Dashboard</NavLink>
          <NavLink href="/about">About</NavLink>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-medium text-monta-grey-dark hover:text-monta-black transition-colors duration-200"
          >
            Sign in
          </Link>
          <Link
            href="/get-started"
            className="inline-flex items-center px-5 py-2 text-sm font-medium uppercase tracking-wide text-white bg-monta-blue hover:bg-monta-blue-light rounded-full border-0 transition-all duration-200"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-monta-grey-dark hover:text-monta-black transition-colors duration-200 no-underline"
    >
      {children}
    </Link>
  );
}

function MontaLogo() {
  return (
    <svg
      width="100"
      height="24"
      viewBox="0 0 100 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Monta"
    >
      {/* Simple wordmark placeholder — replace with actual SVG from brand assets */}
      <text
        x="0"
        y="18"
        fontFamily="Instrument Sans, sans-serif"
        fontSize="20"
        fontWeight="600"
        fill="#302ee0"
        letterSpacing="-0.5"
      >
        monta
      </text>
    </svg>
  );
}

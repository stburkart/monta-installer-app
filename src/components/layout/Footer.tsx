import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-monta-blue-dark text-white mt-auto">
      <div className="container-monta py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <span className="text-xl font-semibold tracking-tight" style={{ color: "#302ee0" }}>
              monta
            </span>
            <p className="mt-3 text-sm text-monta-grey-medium leading-relaxed">
              Made to move.
            </p>
          </div>

          {/* Links */}
          <div>
            <h6 className="text-sm font-semibold uppercase tracking-wide text-monta-grey-medium mb-4">
              Product
            </h6>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/dashboard">Dashboard</FooterLink>
              <FooterLink href="/about">About</FooterLink>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h6 className="text-sm font-semibold uppercase tracking-wide text-monta-grey-medium mb-4">
              Legal
            </h6>
            <ul className="space-y-2">
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-monta-grey-medium">
            &copy; {year} Monta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-monta-grey-medium hover:text-white transition-colors duration-200 no-underline"
      >
        {children}
      </Link>
    </li>
  );
}

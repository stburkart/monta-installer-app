import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-monta-blue-dark text-white py-24">
        <div className="container-monta">
          <div className="max-w-2xl">
            <span className="badge badge-info mb-6">
              Installer App
            </span>
            <h1 className="text-white mb-6">
              Made to move.
            </h1>
            <p className="text-lg text-monta-grey-medium leading-relaxed mb-10 max-w-xl">
              A fast, reliable platform built on Monta&apos;s design system.
              Ready to be shaped for your next great product.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg">
                Get started
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-monta-blue-dark">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-20 bg-monta-grey-bg">
        <div className="container-monta">
          <h2 className="text-4xl mb-4">Everything you need</h2>
          <p className="text-monta-grey-dark text-lg mb-12 max-w-xl">
            Built with Monta&apos;s design system — consistent, fast, and ready to ship.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon="⚡"
              title="Fast by default"
              description="Next.js 14 App Router with server components for optimal performance out of the box."
            />
            <FeatureCard
              icon="🎨"
              title="Monta design system"
              description="Instrument Sans, brand colors, spacing, and component patterns — all pre-configured."
            />
            <FeatureCard
              icon="🔧"
              title="TypeScript ready"
              description="Fully typed from day one with strict TypeScript and Tailwind CSS intellisense."
            />
          </div>
        </div>
      </section>

      {/* Button Showcase */}
      <section className="py-20 bg-white">
        <div className="container-monta">
          <h2 className="text-4xl mb-4">Components</h2>
          <p className="text-monta-grey-dark text-lg mb-12">
            Reusable, on-brand components ready to use.
          </p>

          <div className="card card-bordered p-8">
            <h5 className="mb-2">Button variants</h5>
            <p className="text-sm text-monta-grey-dark mb-6">
              All variants follow Monta&apos;s pill-shaped button style with uppercase tracking.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="lg">Large</Button>
              <Button variant="primary" loading>Loading</Button>
              <Button variant="primary" disabled>Disabled</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-monta-blue text-white">
        <div className="container-monta text-center">
          <h2 className="text-white mb-4">Ready to build?</h2>
          <p className="text-lg mb-8 opacity-80 max-w-md mx-auto">
            Start with this boilerplate and ship faster with Monta&apos;s design system.
          </p>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-monta-blue">
            Open the docs
          </Button>
        </div>
      </section>
    </>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="card card-hover bg-white border border-monta-grey-light rounded-xl p-6">
      <span className="text-3xl mb-4 block">{icon}</span>
      <h5 className="mb-2">{title}</h5>
      <p className="text-sm text-monta-grey-dark leading-relaxed">{description}</p>
    </div>
  );
}

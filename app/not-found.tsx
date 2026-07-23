import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center pt-24">
      <p className="text-primary font-mono text-sm mb-4">404</p>
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Oops!</h1>
      <p className="text-white/60 max-w-md mb-8">
        The page you are looking for either doesn&rsquo;t exist or currently not available
      </p>
      <Link
        href="/#hero"
        className="inline-flex items-center rounded-full bg-primary text-secondary font-medium px-8 py-4 hover:opacity-90 transition-opacity"
      >
        Go Back Home
      </Link>
    </div>
  );
}

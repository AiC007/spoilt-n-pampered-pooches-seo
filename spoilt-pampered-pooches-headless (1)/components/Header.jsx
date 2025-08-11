import Link from 'next/link';

export default function Header() {
  return (
    <header className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
      <Link href="/" className="font-semibold text-lg">Spoilt ’n Pampered Pooches</Link>
      <nav className="flex gap-4 text-sm">
        <Link href="/services">Services</Link>
        <Link href="/locations">Locations</Link>
        <Link href="/reviews">Reviews</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}

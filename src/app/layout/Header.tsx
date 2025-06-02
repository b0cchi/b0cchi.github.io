'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '#', label: 'About' },
		{ href: '#', label: 'Experience' },
		{ href: '#', label: 'Projects' },
		{ href: '#', label: 'Blog' },
		{ href: '#', label: 'Contact' },
	];

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 10);
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<header
			className={`
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        w-[90%] max-w-5xl px-6 py-4
        flex items-center justify-between
        transition-all duration-300
        ${
					scrolled
						? 'bg-white/60 backdrop-blur-xl shadow-xl rounded-3xl'
						: 'bg-transparent shadow-none rounded-none'
				}

      ${menuOpen ? 'rounded-b-none' : ''}
      `}
		>
			<Link
				className="font-display text-xl font-bold transition-colors"
				href="/"
			>
				<span>b0cchi</span>
			</Link>

			{/* Hamburger menu icon (for mobile) */}
			<button
				className="md:hidden focus:outline-none"
				onClick={() => setMenuOpen(!menuOpen)}
				aria-label="Toggle menu"
			>
				<svg
					className="w-6 h-6 text-gray-600"
					fill="none"
					stroke="currentColor"
					strokeWidth={2}
					viewBox="0 0 24 24"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					{menuOpen ? (
						<path d="M6 18L18 6M6 6l12 12" /> // × icon
					) : (
						<path d="M3 12h18M3 6h18M3 18h18" /> // ≡ icon
					)}
				</svg>
			</button>

			{/* PC menu */}
			<nav className="hidden md:flex text-gray-600 items-center gap-1">
				{navLinks.map((link) => (
					<a
						key={link.label}
						href={link.href}
						className="px-4 py-2 rounded-md text-sm font-medium transition-all hover:bg-muted/50 variable-font text-muted-foreground"
					>
						{link.label}
					</a>
				))}
			</nav>

			{/* Mobile menu (vertical, toggle display) */}
			{menuOpen && (
				<nav
					className="absolute top-full left-0 w-full
               bg-white/80 backdrop-blur-xl shadow-xl
               flex flex-col items-center space-y-4 py-6
               rounded-b-3xl rounded-t-none
               border-t border-white/60"
				>
					<a
						href="#"
						className="text-gray-700 hover:text-black"
						onClick={() => setMenuOpen(false)}
					>
						Home
					</a>
					<a
						href="#"
						className="text-gray-700 hover:text-black"
						onClick={() => setMenuOpen(false)}
					>
						About
					</a>
					<a
						href="#"
						className="text-gray-700 hover:text-black"
						onClick={() => setMenuOpen(false)}
					>
						Experience
					</a>
					<a
						href="#"
						className="text-gray-700 hover:text-black"
						onClick={() => setMenuOpen(false)}
					>
						Projects
					</a>
					<a
						href="#"
						className="text-gray-700 hover:text-black"
						onClick={() => setMenuOpen(false)}
					>
						Blog
					</a>
					<a
						href="#"
						className="text-gray-700 hover:text-black"
						onClick={() => setMenuOpen(false)}
					>
						Contact
					</a>
				</nav>
			)}
		</header>
	);
}

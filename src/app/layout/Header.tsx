'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
	const [scrolled, setScrolled] = useState(false);

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
        bg-gradient-to-b from-blue-600 to-blue-800
        border-4 border-white
        shadow-[4px_4px_0_rgba(0,0,0,0.3),inset_2px_2px_0_rgba(255,255,255,0.3)]
        ${scrolled
					? 'shadow-[4px_4px_0_rgba(0,0,0,0.5),inset_2px_2px_0_rgba(255,255,255,0.3)]'
					: ''
				}
      `}
		>
			<Link
				className="font-display text-xl font-bold transition-colors text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)]"
				href="/"
			>
				<span>b0cchi.</span>
			</Link>

		</header>
	);
}

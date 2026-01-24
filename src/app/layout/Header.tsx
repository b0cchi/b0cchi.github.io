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
        fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl px-8 py-6
        flex items-center justify-between
        transition-all duration-300
        bg-black border-4 border-yellow-300
        shadow-[4px_4px_0_rgba(0,0,0,0.3),inset_2px_2px_0_rgba(255,255,255,0.3)]
        ${scrolled
					? 'shadow-[4px_4px_0_rgba(0,0,0,0.5),inset_2px_2px_0_rgba(255,255,255,0.3)]'
					: ''
				}
      `}
		>
			<Link
				className="drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)] font-display font-bold text-white text-xl transition-colors"
				href="/"
			>
				<span>b0cchi.</span>
				<span className="bg-black/80 shadow-lg ml-3 px-3 py-1 border-2 border-yellow-300 rounded font-mono text-yellow-200 text-sm animate-pulse">レベルアップは突然に</span>
			</Link>

		</header>
	);
}

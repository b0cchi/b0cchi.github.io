'use client';
import { version } from 'react';

export default function Footer() {
	return (
		<footer className="w-full text-center py-6 mt-auto">
			<p className="text-sm">
				© {new Date().getFullYear()} b0cchi. All rights reserved.
			</p>
			<p className="text-xs text-gray-500 mt-1">
				React v{version} • Next.js 16.x
			</p>
		</footer>
	);
}

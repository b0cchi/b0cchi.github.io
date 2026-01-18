export default function Footer() {
	return (
		<footer className="w-full text-center py-6 mt-auto bg-gradient-to-b from-blue-800 to-blue-950 border-t-4 border-white">
			<p className="text-sm text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)]">
				© {new Date().getFullYear()} b0cchi. All rights reserved.
			</p>
		</footer>
	);
}

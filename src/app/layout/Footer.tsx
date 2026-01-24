export default function Footer() {
	return (
		<footer className="w-full text-center py-6 mt-auto bg-black border-t-4 border-yellow-300">
			<p className="text-sm text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)]">
				© {new Date().getFullYear()} b0cchi. All rights reserved.
			</p>
		</footer>
	);
}

export default function Footer() {
	return (
		<footer className="fixed bottom-0 left-0 w-full text-center py-6 ">
			<p className="text-sm">
				© {new Date().getFullYear()} b0cchi. All rights reserved.
			</p>
		</footer>
	);
}

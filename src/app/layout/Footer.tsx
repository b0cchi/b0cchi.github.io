export default function Footer() {
	return (
		<footer className="fixed bottom-0 left-0 w-full text-center py-6 bg-gray-100 dark:bg-gray-900">
			<p className="text-sm text-gray-600 dark:text-gray-400">
				© {new Date().getFullYear()} b0cchi. All rights reserved.
			</p>
		</footer>
	);
}

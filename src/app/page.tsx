import Header from './layout/Header';

export const metadata = {
	title: 'My Portfolio - Home',
	description: 'Welcome to my portfolio!',
};

export default function Home() {
	return (
		<>
			<Header />
			<main className="pt-20 px-4 max-w-4xl mx-auto">
				<h1 className="text-3xl font-bold mb-4">Hi,</h1>
				<p className="mb-32">I&apos;m b0cchi</p>
				<p className="mb-8">日本人ですぞ</p>
				<div className="h-[2000px] bg-gray-100">{/* スクロール領域 */}</div>
			</main>
		</>
	);
}

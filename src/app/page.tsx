'use client';
import Header from './layout/Header';
import Typewriter from 'typewriter-effect';

export default function Home() {
	return (
		<>
			<Header />
			<main className="relative pt-24 px-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl">
				<h1 className="text-3xl font-bold mb-4">Hi,</h1>
				<p className="mb-2">I&apos;m b0cchi</p>
				<div className="text-2xl sm:text-4xl font-semibold text-center text-silate-900 mb-8">
					<Typewriter
						options={{
							strings: [
								'Full Stack Developer',
								'Always Learning',
								'Code. Run. Repeat :)',
							],
							autoStart: true,
							loop: true,
						}}
					/>
				</div>
				<div className="h-[2000px] bg-gray-100">{/* スクロール領域 */}</div>
			</main>
		</>
	);
}

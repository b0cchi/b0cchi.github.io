import type { Metadata } from 'next';
import { Geist, Geist_Mono, Noto_Sans_JP, Montserrat } from 'next/font/google';
import './globals.css';
import Footer from './layout/Footer';
import Header from './layout/Header';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});
const notoSansJp = Noto_Sans_JP({
	subsets: ['latin'],
	weight: ['400', '500', '700', '900'], // ドラクエ風の太字用に900を追加
	display: 'swap', // 推奨：レイアウトシフト防止
});
const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-montserrat',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'b0cchi portfolio',
	description: 'A portfolio showcasing my work and skills',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`flex flex-col min-h-screen ${notoSansJp.className} ${montserrat.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Header />
				<div className="flex-1">{children}</div>
				<Footer />
			</body>
		</html>
	);
}

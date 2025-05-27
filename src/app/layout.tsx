import type { Metadata } from 'next';
import { Geist, Geist_Mono, Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/app-sidebar';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});
const notoSansJp = Noto_Sans_JP({
	subsets: ['latin'],
	weight: ['400', '500', '700'], // 必要なウェイトを指定
	display: 'swap', // 推奨：レイアウトシフト防止
});
const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
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
				className={`${notoSansJp.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Sidebar>
					<main>{children}</main>
				</Sidebar>
			</body>
		</html>
	);
}

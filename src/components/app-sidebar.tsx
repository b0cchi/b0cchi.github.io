'use client';
// components/Sidebar.tsx
import { Collapsible, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Home, Menu, SquareKanban } from 'lucide-react';
import { ReactNode, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type SidebarLayoutProps = {
	children: ReactNode;
};

const links = [
	{ href: '/', label: 'Top', icon: Home },
	{ href: '/jobs', label: 'Jobs', icon: SquareKanban },
];

export default function Sidebar({ children }: SidebarLayoutProps) {
	const [open, setOpen] = useState<boolean | null>(null);
	useEffect(() => {
		setOpen(true); // 初期状態
	}, []);
	if (open === null) {
		return null; // ハイドレーション差異を防ぐ
	}

	return (
		<Collapsible open={open} onOpenChange={setOpen} className="flex h-screen">
			<div
				className={cn(
					'bg-gray-900 text-white transition-all',
					open ? 'w-64' : 'w-16'
				)}
			>
				{/* ナビゲーションエリア */}
				<nav className="mt-4 flex flex-col items-center gap-2">
					{/* ハンバーガートリガー */}
					<CollapsibleTrigger
						className={cn(
							'hover:bg-gray-800 p-2 rounded w-fit hover:cursor-pointer',
							open ? 'ml-auto' : 'justify-center'
						)}
					>
						<Menu className="w-6 h-6" />
					</CollapsibleTrigger>

					{links.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={cn(
								'hover:bg-gray-800 p-2 rounded flex items-center w-full',
								open ? 'justify-start' : 'justify-center',
								open ? 'pl-4' : 'pl-2'
							)}
						>
							<link.icon className="w-5 h-5" />
							{open && <span className="ml-2 text-sm">{link.label}</span>}
						</Link>
					))}

					{/* 他のアイコンも同様に */}
				</nav>
			</div>

			{/* メインコンテンツ */}
			<div className="flex-1 overflow-auto h-screen">{children}</div>
		</Collapsible>
	);
}

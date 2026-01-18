'use client';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import {
	FaJava,
	FaPython,
	FaHtml5,
	FaCss3,
	FaAngular,
	FaReact,
} from 'react-icons/fa';
import {
	SiDotnet,
	SiGo,
	SiNextdotjs,
	SiTailwindcss,
	SiMysql,
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';

const skills = [
	{ icon: <TbBrandCSharp />, label: 'C#', color: 'text-purple-700' },
	{ icon: <SiDotnet />, label: '.NET', color: 'text-indigo-600' },
	{ icon: <FaJava />, label: 'Java', color: 'text-red-700' },
	{ icon: <SiGo />, label: 'Go', color: 'text-cyan-600' },
	{ icon: <FaPython />, label: 'Python', color: 'text-yellow-500' },
	{ icon: <FaHtml5 />, label: 'HTML', color: 'text-orange-600' },
	{ icon: <FaCss3 />, label: 'CSS', color: 'text-blue-600' },
	{ icon: <FaAngular />, label: 'Angular', color: 'text-red-600' },
	{ icon: <FaReact />, label: 'React', color: 'text-sky-500' },
	{
		icon: <SiNextdotjs />,
		label: 'Next.js',
		color: 'text-black dark:text-white',
	},
	{ icon: <SiTailwindcss />, label: 'TailwindCSS', color: 'text-teal-400' },
	{ icon: <SiMysql />, label: 'SQL', color: 'text-blue-800' },
];
export default function Home() {
	return (
		<>
			<main className="relative pt-32 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl pb-20">
				{/* RPG風メッセージウィンドウ */}
				<div className="bg-gradient-to-b from-blue-700 to-blue-900 border-4 border-white shadow-[6px_6px_0_rgba(0,0,0,0.3),inset_3px_3px_0_rgba(255,255,255,0.2)] px-6 py-8 mb-8 relative ">
					{/* ドット絵風の装飾コーナー */}
					<div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-400 border-2 border-white"></div>
					<div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 border-2 border-white"></div>
					<div className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 border-2 border-white"></div>
					<div className="absolute -bottom-2 -right-2 w-4 h-4 bg-yellow-400 border-2 border-white"></div>
					<h1 className="text-3xl font-black mb-4 text-yellow-300 drop-shadow-[3px_3px_0_rgba(0,0,0,0.5)] tracking-wide">
						▶ ようこそ！
					</h1>
					<p className="mb-2 text-white text-lg">I&apos;m b0cchi</p>
					<div className="text-2xl sm:text-4xl font-black text-left text-white mb-4 drop-shadow-[3px_3px_0_rgba(0,0,0,0.7)] tracking-wide">
						<Typewriter
							options={{
								strings: [
									'▶ バグは たおした！けいけんちを かくとく',
									'▶ つぎの ぎじゅつを おぼえる たびへ',
									'▶ リファクタして つよく なった！',
								],
								autoStart: true,
								loop: true,
								delay: 80,
								deleteSpeed: 50,
							}}
						/>
					</div>
				</div>

				{/* とくぎ選択画面風のレイアウト */}
				<div className="bg-gradient-to-b from-blue-700 to-blue-900 border-4 border-white shadow-[6px_6px_0_rgba(0,0,0,0.3),inset_3px_3px_0_rgba(255,255,255,0.2)] p-0 mb-8 relative -mx-[4px]">
					{/* ドット絵風の装飾コーナー */}
					<div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-400 border-2 border-white"></div>
					<div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 border-2 border-white"></div>
					<div className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 border-2 border-white"></div>
					<div className="absolute -bottom-2 -right-2 w-4 h-4 bg-yellow-400 border-2 border-white"></div>

					{/* ヘッダー */}
					<div className="bg-blue-800 border-b-2 border-blue-950 px-6 py-3">
						<h2 className="text-2xl font-bold text-yellow-300 drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)]">
							⚔️ とくぎ
						</h2>
					</div>

					<div className="flex flex-col md:flex-row min-h-[400px]">
						{/* 左側：キャラクター情報 */}
						<div className="md:w-1/3 bg-gradient-to-b from-blue-800 to-blue-900 border-r-0 md:border-r-2 border-b-2 md:border-b-0 border-blue-950 p-8 flex flex-col items-center justify-center space-y-6">
							{/* アバター */}
							<div className="relative">
								<div className="bg-gradient-to-b from-yellow-100 to-yellow-200 border-4 border-amber-700 shadow-[6px_6px_0_rgba(0,0,0,0.4),inset_3px_3px_0_rgba(255,255,255,0.4)] rounded-full w-36 h-36 flex items-center justify-center overflow-hidden">
									<Image
										src="/avatar.jpg"
										alt="b0cchi avatar"
										width={144}
										height={144}
										className="object-cover w-full h-full"
									/>
								</div>
							</div>

							{/* 名前 */}
							<div className="bg-gradient-to-b from-blue-700 to-blue-800 border-3 border-white px-6 py-2 shadow-[3px_3px_0_rgba(0,0,0,0.4)]">
								<p className="text-yellow-300 text-2xl font-bold drop-shadow-[2px_2px_0_rgba(0,0,0,0.7)] tracking-wider">
									b0cchi
								</p>
							</div>

							{/* ステータス */}
							<div className="w-full space-y-3">
								{/* レベル */}
								<div className="bg-gradient-to-b from-slate-100 to-slate-200 border-3 border-slate-400 shadow-[3px_3px_0_rgba(0,0,0,0.3)] p-3">
									<div className="flex justify-between items-center">
										<span className="text-slate-700 font-bold text-base">レベル</span>
										<span className="text-amber-600 font-bold text-2xl drop-shadow-[1px_1px_0_rgba(0,0,0,0.2)]">∞</span>
									</div>
								</div>

								{/* 経験値 */}
								<div className="bg-gradient-to-b from-slate-100 to-slate-200 border-3 border-slate-400 shadow-[3px_3px_0_rgba(0,0,0,0.3)] p-3">
									<div className="space-y-2">
										<div className="flex justify-between items-center">
											<span className="text-slate-700 font-bold text-base">けいけんち</span>
											<span className="text-amber-600 font-bold text-xl drop-shadow-[1px_1px_0_rgba(0,0,0,0.2)]">9999+</span>
										</div>
										{/* 経験値バー */}
										<div className="w-full bg-slate-300 h-2 border-2 border-slate-500 overflow-hidden">
											<div className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 animate-[shimmer_2s_ease-in-out_infinite]"></div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* 右側：スキル一覧 */}
						<div className="md:w-2/3 p-6 bg-gradient-to-b from-slate-100 to-slate-200">
							<div className="grid grid-cols-2 gap-3">
								{skills.map((skill, i) => (
									<div
										key={i}
										style={{
											animationDelay: `${i * 0.05}s`,
										}}
										className="bg-white border-2 border-slate-400 shadow-[2px_2px_0_rgba(0,0,0,0.2)] p-3 hover:bg-gradient-to-b hover:from-yellow-100 hover:to-yellow-200 hover:border-amber-500 hover:shadow-[3px_3px_0_rgba(0,0,0,0.3)] active:bg-gradient-to-b active:from-yellow-100 active:to-yellow-200 transition-all duration-200 cursor-pointer relative group animate-[slideIn_0.3s_ease-out_forwards] opacity-0"
									>
										<div className="flex items-center gap-3">
											<div className={`text-3xl ${skill.color} drop-shadow-[1px_1px_0_rgba(0,0,0,0.1)] group-hover:scale-110 transition-transform`}>
												{skill.icon}
											</div>
											<div className="flex-1">
												<div className="text-sm font-bold text-slate-800 group-hover:text-amber-900 transition-colors">
													{skill.label}
												</div>
												{/* レベルドット */}
												<div className="flex gap-1 mt-1">
													{[...Array(3)].map((_, idx) => (
														<div
															key={idx}
															className="w-1.5 h-1.5 bg-amber-500 border border-amber-700 group-hover:bg-yellow-400 animate-[levelPulse_1.5s_ease-in-out_infinite]"
															style={{
																animationDelay: `${i * 0.2 + idx * 0.15}s`,
															}}
														></div>
													))}
												</div>
											</div>
											{/* カーソル風の▶ */}
											<div className="opacity-0 group-hover:opacity-100 text-amber-600 text-xl font-bold animate-pulse transition-opacity">
												▶
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
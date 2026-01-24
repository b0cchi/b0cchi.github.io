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
			<main className="left-1/2 relative pt-32 pb-12 w-[90vw] max-w-5xl -translate-x-1/2">
				{/* RPG風メッセージウィンドウ */}
				<div className="relative bg-black shadow-[4px_4px_0_rgba(0,0,0,0.3),inset_2px_2px_0_rgba(255,255,255,0.3)] mb-8 px-8 py-6 border-4 border-yellow-300 font-mono">
					{/* ドット絵風の装飾コーナー */}
					<div className="-top-2 -left-2 absolute bg-yellow-400 border-2 border-white w-4 h-4"></div>
					<div className="-top-2 -right-2 absolute bg-yellow-400 border-2 border-white w-4 h-4"></div>
					<div className="-bottom-2 -left-2 absolute bg-yellow-400 border-2 border-white w-4 h-4"></div>
					<div className="-right-2 -bottom-2 absolute bg-yellow-400 border-2 border-white w-4 h-4"></div>



					<div className="drop-shadow-[3px_3px_0_rgba(0,0,0,0.7)] mb-4 w-max font-black text-white text-2xl sm:text-4xl text-left tracking-wide">
						<Typewriter
							options={{
								strings: [
									'▶ バグを たおした！けいけんちを かくとく',
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
				<div className="relative bg-black shadow-[4px_4px_0_rgba(0,0,0,0.3),inset_2px_2px_0_rgba(255,255,255,0.3)] -mx-[4px] mb-8 p-0 border-4 border-yellow-300">
					{/* ドット絵風の装飾コーナー */}
					<div className="-top-2 -left-2 absolute bg-yellow-400 border-2 border-white w-4 h-4"></div>
					<div className="-top-2 -right-2 absolute bg-yellow-400 border-2 border-white w-4 h-4"></div>
					<div className="-bottom-2 -left-2 absolute bg-yellow-400 border-2 border-white w-4 h-4"></div>
					<div className="-right-2 -bottom-2 absolute bg-yellow-400 border-2 border-white w-4 h-4"></div>

					{/* ヘッダー */}
					<div className="bg-black px-6 py-3 border-yellow-300 border-b-2">
						<h2 className="drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)] font-bold text-yellow-300 text-2xl">
							⚔️ とくぎ
						</h2>
					</div>

					<div className="flex md:flex-row flex-col min-h-[400px]">
						{/* 左側：キャラクター情報 */}
						<div className="flex flex-col justify-center items-center space-y-6 bg-gradient-to-b from-blue-800 to-blue-900 p-8 border-blue-950 border-r-0 md:border-r-2 border-b-2 md:border-b-0 md:w-1/3">
							{/* アバター */}
							<div className="relative">
								<div className="flex justify-center items-center bg-black shadow-[6px_6px_0_rgba(0,0,0,0.7),inset_3px_3px_0_rgba(255,255,255,0.2)] border-4 border-yellow-300 rounded-full w-36 h-36 overflow-hidden">
									<Image
										src="/avatar.jpg"
										alt="b0cchi avatar"
										width={144}
										height={144}
										className="w-full h-full object-cover"
									/>
								</div>
							</div>

							{/* 名前 */}
							<div className="bg-black shadow-[3px_3px_0_rgba(0,0,0,0.7)] px-6 py-2 border-2 border-yellow-300">
								<p className="drop-shadow-[2px_2px_0_rgba(0,0,0,0.7)] font-bold text-yellow-300 text-2xl tracking-wider">
									b0cchi
								</p>
							</div>

							{/* ステータス */}
							<div className="space-y-3 w-full">
								{/* レベル */}
								<div className="bg-gradient-to-b from-slate-100 to-slate-200 shadow-[3px_3px_0_rgba(0,0,0,0.3)] p-3 border-3 border-slate-400">
									<div className="flex justify-between items-center">
										<span className="font-bold text-slate-700 text-base">レベル</span>
										<span className="drop-shadow-[1px_1px_0_rgba(0,0,0,0.2)] font-bold text-amber-600 text-2xl">∞</span>
									</div>
								</div>

								{/* 経験値 */}
								<div className="bg-gradient-to-b from-slate-100 to-slate-200 shadow-[3px_3px_0_rgba(0,0,0,0.3)] p-3 border-3 border-slate-400">
									<div className="space-y-2">
										<div className="flex justify-between items-center">
											<span className="font-bold text-slate-700 text-base">けいけんち</span>
											<span className="drop-shadow-[1px_1px_0_rgba(0,0,0,0.2)] font-bold text-amber-600 text-xl">9999+</span>
										</div>
										{/* 経験値バー */}
										<div className="bg-slate-300 border-2 border-slate-500 w-full h-2 overflow-hidden">
											<div className="bg-gradient-to-r from-yellow-400 to-amber-500 h-full animate-[shimmer_2s_ease-in-out_infinite]"></div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* 右側：スキル一覧 */}
						<div className="bg-gradient-to-b from-slate-100 to-slate-200 p-6 md:w-2/3">
							<div className="gap-3 grid grid-cols-2">
								{skills.map((skill, i) => (
									<div
										key={i}
										style={{
											animationDelay: `${i * 0.05}s`,
										}}
										className="group relative bg-white hover:bg-gradient-to-b active:bg-gradient-to-b hover:from-yellow-100 active:from-yellow-100 hover:to-yellow-200 active:to-yellow-200 opacity-0 shadow-[2px_2px_0_rgba(0,0,0,0.2)] hover:shadow-[3px_3px_0_rgba(0,0,0,0.3)] p-3 border-2 border-slate-400 hover:border-amber-500 transition-all animate-[slideIn_0.3s_ease-out_forwards] duration-200 cursor-pointer"
									>
										<div className="flex items-center gap-3">
											<div className={`text-3xl ${skill.color} drop-shadow-[1px_1px_0_rgba(0,0,0,0.1)] group-hover:scale-110 transition-transform`}>
												{skill.icon}
											</div>
											<div className="flex-1">
												<div className="font-bold text-slate-800 group-hover:text-amber-900 text-sm transition-colors">
													{skill.label}
												</div>
												{/* レベルドット */}
												<div className="flex gap-1 mt-1">
													{[...Array(3)].map((_, idx) => (
														<div
															key={idx}
															className="bg-amber-500 group-hover:bg-yellow-400 border border-amber-700 w-1.5 h-1.5 animate-[levelPulse_1.5s_ease-in-out_infinite]"
															style={{
																animationDelay: `${i * 0.2 + idx * 0.15}s`,
															}}
														></div>
													))}
												</div>
											</div>
											{/* カーソル風の▶ */}
											<div className="opacity-0 group-hover:opacity-100 font-bold text-amber-600 text-xl transition-opacity animate-pulse">
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

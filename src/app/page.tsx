'use client';
import Header from './layout/Header';
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
			<Header />
			<main className="relative pt-24 px-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl">
				<h1 className="text-3xl font-bold mb-4">Hi,</h1>
				<p className="mb-2">I&apos;m b0cchi</p>
				<div className="text-2xl sm:text-4xl font-semibold text-left text-silate-900 mb-8">
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
				<h2 className="text-2xl font-bold mb-4">Skills</h2>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
					{skills.map((skill, i) => (
						<div
							key={i}
							className="flex flex-col items-center justify-center p-4 rounded-2xl shadow-md bg-white dark:bg-gray-800 hover:scale-105 transition-transform duration-300"
						>
							<div className={`text-5xl mb-2 ${skill.color}`}>{skill.icon}</div>
							<div className="text-sm font-semibold text-gray-700 dark:text-gray-200">
								{skill.label}
							</div>
						</div>
					))}
				</div>
			</main>
		</>
	);
}

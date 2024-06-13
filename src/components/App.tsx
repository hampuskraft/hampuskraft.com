import {DotLottieReact} from '@lottiefiles/dotlottie-react';
import {Bluesky, Discord, Email, GitHub, LinkedIn, Mastodon, Threads} from '../common/icons';
import {useFavicon} from '../hooks/useFavicon';
import lottieJson from '../images/hampus.json';
import magicWandSvg from '../images/magic-wand.svg';
import {Anchor} from './Anchor';

const PROFILES = [
	{
		label: 'Email',
		icon: <Email />,
		name: 'hello@hampuskraft.com',
		url: 'mailto:hello@hampuskraft.com',
	},
	{
		label: 'LinkedIn',
		icon: <LinkedIn />,
		name: '@hampuskraft',
		url: 'https://www.linkedin.com/in/hampuskraft',
	},
	{
		label: 'GitHub',
		icon: <GitHub />,
		name: '@hampuskraft',
		url: 'https://github.com/hampuskraft',
	},
	{
		label: 'Threads',
		icon: <Threads />,
		name: '@hampuskraft',
		url: 'https://www.threads.net/@hampuskraft',
	},
	{
		label: 'Mastodon',
		icon: <Mastodon />,
		name: '@hampus@mastodon.social',
		url: 'https://mastodon.social/@hampus',
		rel: 'me',
	},
	{
		label: 'Bluesky',
		icon: <Bluesky />,
		name: '@hampuskraft.com',
		url: 'https://bsky.app/profile/hampuskraft.com',
	},
	{
		label: 'Discord',
		icon: <Discord />,
		name: '@hampus.',
		url: 'discord:/users/514340181243854848',
	},
];

export function App() {
	useFavicon();
	return (
		<main className="grid h-screen place-items-center pr-4 pl-4 leading-9">
			<article className="mx-auto flex max-w-lg flex-col gap-4">
				<DotLottieReact data={lottieJson} className="h-16 w-16" loop autoplay />

				<div className="flex flex-col gap-1">
					<h1 className="font-semibold text-4xl leading-snug tracking-tighter">Hampus Kraft</h1>
					<p className="leading-relaxed">
						I'm a software engineer passionate about React, TypeScript, and Rust. I'm also interested in distributed
						systems and scalable architecture.
					</p>
				</div>

				<div className="-space-y-0.5 -mt-1 flex flex-col">
					{PROFILES.map((profile) => (
						<div className="flex items-center gap-2" key={profile.label}>
							{profile.icon}
							<Anchor href={profile.url} rel={profile.rel}>
								{profile.name}
							</Anchor>
						</div>
					))}
				</div>

				<div className="flex items-center gap-2">
					<img src={magicWandSvg.src} aria-hidden className="inline-block h-4 w-4" alt="" />
					<span className="text-gray-400 text-xs">
						Avatar brought to life by{' '}
						<a
							className="text-gray-300 hover:underline"
							href="https://github.com/MrStefanW"
							rel="noreferrer"
							target="_blank"
						>
							@MrStefanW
						</a>
						.
					</span>
				</div>
			</article>
		</main>
	);
}

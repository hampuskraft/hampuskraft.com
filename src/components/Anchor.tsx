type AnchorProps = {
	href: string;
	children: React.ReactNode;
	rel?: string;
};

export function Anchor(props: AnchorProps) {
	return (
		<a
			className="font-medium text-text-link focus-visible:underline hover:underline focus:outline-none"
			href={props.href}
			rel={props.rel ?? 'noreferrer'}
			target="_blank"
		>
			{props.children}
		</a>
	);
}

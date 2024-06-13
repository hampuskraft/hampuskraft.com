import {useEffect, useState} from 'react';

function isMediaMatch(mediaQuery: string) {
	return typeof window !== 'undefined' && window.matchMedia(mediaQuery).matches;
}

export function useMediaQuery(query: string) {
	const [matches, setMatches] = useState(isMediaMatch(query));
	const handleChange = () => setMatches(isMediaMatch(query));

	// biome-ignore lint/correctness/useExhaustiveDependencies: this is fine
	useEffect(() => {
		const matchMedia = window.matchMedia(query);
		handleChange();
		matchMedia.addEventListener('change', handleChange);
		return () => matchMedia.removeEventListener('change', handleChange);
	}, [query]);

	return matches;
}

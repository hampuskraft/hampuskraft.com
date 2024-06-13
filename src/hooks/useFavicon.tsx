import {useEffect} from 'react';
import invariant from 'tiny-invariant';
import {useMediaQuery} from './useMediaQuery';

export function useFavicon() {
	const prefersDarkColorScheme = useMediaQuery('(prefers-color-scheme: dark)');
	useEffect(() => {
		const colorScheme = prefersDarkColorScheme ? 'dark' : 'light';
		const favicon = document.querySelector<HTMLLinkElement>('.favicon[type="image/svg+xml"]');
		invariant(favicon != null, 'Favicon not found');
		const colorSchemeSuffix = colorScheme === 'light' ? '' : '-dark';
		const index = favicon.href.indexOf('-dark.svg');
		const newFaviconName = favicon.href.slice(0, Math.max(0, index !== -1 ? index : favicon.href.lastIndexOf('.')));
		favicon.href = `${newFaviconName}${colorSchemeSuffix}.svg`;
	}, [prefersDarkColorScheme]);
}

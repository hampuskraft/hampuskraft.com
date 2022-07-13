import React from 'react'

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = React.useState<boolean>(window.matchMedia(query).matches)
  function handleChange(): void {
    setMatches(window.matchMedia(query).matches)
  }

  React.useEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()
    matchMedia.addEventListener('change', handleChange)
    return () => matchMedia.removeEventListener('change', handleChange)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return matches
}

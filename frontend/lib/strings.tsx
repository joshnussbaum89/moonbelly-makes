/**
 * Returns matched search text as a highlighted JSX element
 */
export function highlightMatchedSearchText(searchQuery: string, text: string) {
  // Filter out invalid regular expression characters
  const filteredSearchQuery = searchQuery.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')

  // Parse query and highlight matches
  const regex = new RegExp(filteredSearchQuery, 'gi')
  const parts = text.split(regex)
  const matches = text.match(regex)

  const highlightedText = parts.map((part, i) => (
    <span key={i}>
      {part}
      {matches && <span style={{ backgroundColor: '#daeada' }}>{matches[i]}</span>}
    </span>
  ))

  return highlightedText
}

/**
 * Removes dashes and returns a lowercase title string
 *
 * (CSS handles capitalization)
 */
export function createTitleFromSlug(slug: string) {
  return slug.split('-').join(' ') // 'hello-world' -> 'hello world'
}

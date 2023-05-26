export const highlightMatchedSearchText = (
  searchQuery: string,
  text: string
) => {
  // Filter out invalid regular expression characters
  const filteredSearchQuery = searchQuery.replace(
    /[-[\]{}()*+?.,\\^$|#\s]/g,
    '\\$&'
  )

  // Parse query and highlight matches
  const regex = new RegExp(filteredSearchQuery, 'gi')
  const parts = text.split(regex)
  const matches = text.match(regex)

  const highlightedText = parts.map((part, i) => (
    <span key={i}>
      {part}
      {matches && (
        <span style={{ backgroundColor: '#daeada' }}>{matches[i]}</span>
      )}
    </span>
  ))
  
  return highlightedText
}

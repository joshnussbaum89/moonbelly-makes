// Components
import { useState } from 'react'
import { TbSearch } from 'react-icons/tb'

// Styles
import styles from './TopBarSearch.module.css'

/**
 * TopBarSearch Component
 *
 * @returns Search input field
 */
export default function TopBarSearch() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState({})

  // Handle search logic
  const handleSearch = (e) => {
    setSearchQuery(e.target.value)

    // TODO: switch to axios or React.query?
    fetch('/api/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: searchQuery,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data)
        console.log(`Search Results: `, searchResults.data)
      })
  }

  return (
    <div className={styles.searchContainer}>
      <input
        type="search"
        id="search"
        name="search"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="search moonbelly"
      />

      {/* TODO: Style this! 😁 */}
      {/* <ul>
        {searchResults.data?.map((result) => (
          <li>{result.title}</li>
        ))}
      </ul> */}
      <TbSearch />
    </div>
  )
}

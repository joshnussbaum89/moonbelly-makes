// Components
import Link from 'next/link'
import { useEffect, useState } from 'react'
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
  const [isActive, setIsActive] = useState(false)

  // TODO: switch to axios or React.query or SWR?
  useEffect(() => {
    if (searchQuery === '') {
      setSearchResults({})
      setIsActive(false)
    } else {
      setIsActive(true)
      fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: searchQuery }),
      })
        .then((response) => response.json())
        .then((data) => setSearchResults(data))
        .catch((error) => console.error(error))
    }
  }, [searchQuery])

  // Handle search logic
  const handleSearch = (e) => setSearchQuery(e.target.value)

  // Reset state
  const handleClick = () => {
    setSearchQuery('')
    setSearchResults({})
    setIsActive(false)
  }

  return (
    <div className={styles.searchContainer}>
      {/* Used to hide auto-complete on Chrome */}
      <input
        type="search"
        name="fake_search"
        style={{ display: 'none' }}
        aria-hidden="true"
      ></input>
      <input
        type="search"
        id="search"
        name="search"
        value={searchQuery}
        onChange={handleSearch}
        onFocus={() => {
          if (searchQuery !== '') setIsActive(true)
        }}
        onBlur={() => setIsActive(false)}
        autoComplete="off"
        placeholder="search moonbelly"
      />
      <ul
        className={
          isActive ? `${styles.subNav} ${styles.active}` : styles.subNav
        }
      >
        {Object.keys(searchResults).length === 0 ? (
          <li className={styles.userMessage}>Loading...</li>
        ) : searchResults.data?.length === 0 ? (
          <li className={styles.userMessage}>No results...</li>
        ) : (
          searchResults?.data?.map((result) => {
            return (
              <li className={styles.item} key={result._id}>
                <Link
                  href={`/posts/${result.slug.current}`}
                  onClick={handleClick}
                >
                  {result.title}
                </Link>
              </li>
            )
          })
        )}
      </ul>
      <TbSearch />
    </div>
  )
}

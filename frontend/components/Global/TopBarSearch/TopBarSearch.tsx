// Components
import { useEffect, useState } from 'react'
import { TbSearch } from 'react-icons/tb'
import { ThreeDots } from 'react-loader-spinner'
import SearchResults from '../SearchResults/SearchResults'

// Styles
import styles from './TopBarSearch.module.css'

// Types
import { SlimPost, Tag } from '../../../types'

interface SearchResultsProps {
  posts: SlimPost[]
  tags: Tag[]
}

/**
 * TopBarSearch Component
 */
export default function TopBarSearch() {
  const [isActive, setIsActive] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResultsProps>({
    posts: [],
    tags: [],
  })

  // Search logic
  const handleSearch = (event: React.FormEvent<EventTarget>) => {
    setSearchQuery((event.target as HTMLInputElement).value)
  }

  // Reset state
  const handleClick = () => {
    setSearchQuery('')
    setSearchResults({ posts: [], tags: [] })
  }

  useEffect(() => {
    // Hide search results container
    const hideResultContainer = () => {
      setSearchResults({ posts: [], tags: [] })
      setIsActive(false)
    }

    // ['POST'] - get search results
    const fetchResults = async () => {
      setIsLoading(true)

      try {
        setIsActive(true)

        const response = await fetch('/api/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: searchQuery }),
        })

        const data = await response.json()

        setSearchResults(data)
      } catch (error) {
        console.log(error)
      }
      setIsLoading(false)
    }

    if (searchQuery === '') {
      hideResultContainer()
    } else {
      fetchResults()
    }
  }, [searchQuery])

  return (
    <div className={styles.container}>
      {/* Hide auto-complete on Chrome */}
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
      <ul className={isActive ? `${styles.results} ${styles.active}` : styles.results}>
        {isLoading ? (
          <ThreeDots
            height="40"
            width="40"
            wrapperClass={styles.loading}
            ariaLabel="three-dots-loading"
            visible={true}
          />
        ) : searchResults.posts.length === 0 && searchResults.tags.length === 0 ? (
          <li className={styles.userMessage}>No results...</li>
        ) : (
          <SearchResults
            searchQuery={searchQuery}
            searchResults={searchResults}
            handleClick={handleClick}
          />
        )}
      </ul>
      <TbSearch />
    </div>
  )
}

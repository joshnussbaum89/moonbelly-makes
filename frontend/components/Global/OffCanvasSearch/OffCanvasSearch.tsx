// Components, hooks
import { useState, useEffect } from 'react'
import { TbSearch, TbX } from 'react-icons/tb'
import { ThreeDots } from 'react-loader-spinner'
import SearchResults from '../SearchResults/SearchResults'

// Styles
import styles from './OffCanvasSearch.module.css'

// Types
import { SlimPost, Tag } from '../../../types'

interface OffCanvasSearchProps {
  mobileSearchIsActive: boolean
  handleShowMobileSearch: () => void
  searchRef: React.RefObject<HTMLInputElement>
}

interface SearchResultsProps {
  posts: SlimPost[]
  tags: Tag[]
}

/**
 * OffCanvasSearch mobile search component (hidden until active)
 */
export default function OffCanvasSearch({
  mobileSearchIsActive,
  handleShowMobileSearch,
  searchRef,
}: OffCanvasSearchProps) {
  const [isActive, setIsActive] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResultsProps>({
    posts: [],
    tags: [],
  })

  // Handle search logic
  const handleSearch = (event: React.FormEvent<EventTarget>) => {
    setSearchQuery((event.target as HTMLInputElement).value)
  }

  // Reset state
  const handleClick = () => {
    setSearchQuery('')
    setSearchResults({ posts: [], tags: [] })
    handleShowMobileSearch()
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

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const eventTarget = event.target as HTMLElement
      const eventTargetIsCanvas = eventTarget !== document.querySelector('body')

      if (mobileSearchIsActive && !eventTargetIsCanvas) {
        handleShowMobileSearch()
      }
    }

    document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [mobileSearchIsActive, handleShowMobileSearch])

  return (
    <div
      className={mobileSearchIsActive ? `${styles.container} ${styles.active}` : styles.container}
    >
      <TbSearch />
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
        onFocus={() => searchQuery !== '' && setIsActive(true)}
        onBlur={() => setIsActive(false)}
        autoComplete="off"
        placeholder="search moonbelly"
        ref={searchRef}
      />
      <ul className={isActive ? `${styles.results} ${styles.active}` : styles.results}>
        {isLoading ? (
          <ThreeDots
            height="40"
            width="40"
            wrapperClass={styles.loading}
            ariaLabel="loading"
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
      <TbX onClick={handleShowMobileSearch} />
    </div>
  )
}

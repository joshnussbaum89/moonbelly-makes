// Components, hooks
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { TbSearch, TbX } from 'react-icons/tb'
import { ThreeDots } from 'react-loader-spinner'

// Styles
import styles from './OffCanvasSearch.module.css'

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
  const [searchResults, setSearchResults] = useState<{ data: Post[] }>({
    data: [],
  })
  // Handle search logic
  const handleSearch = (event: React.FormEvent<EventTarget>) => {
    setSearchQuery((event.target as HTMLInputElement).value)
  }

  // 'POST' request to get search results
  const fetchResults = async () => {
    // Show loading spinner
    setIsLoading(true)

    try {
      // Show results container
      setIsActive(true)

      // Fetch results
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: searchQuery }),
      })

      const data = await response.json()

      // Set results to state
      setSearchResults(data)
    } catch (error) {
      console.log(error)
    }

    // Hide loading spinner
    setIsLoading(false)
  }

  // Reset state
  const handleClick = () => {
    setSearchQuery('')
    setSearchResults({ data: [] })
    handleShowMobileSearch()
  }

  useEffect(() => {
    const hideResultContainer = () => {
      setSearchResults({ data: [] })
      setIsActive(false)
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
  }, [mobileSearchIsActive])

  return (
    <div
      className={
        mobileSearchIsActive
          ? `${styles.offCanvasContainer} ${styles.active}`
          : styles.offCanvasContainer
      }
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
        onFocus={() => {
          if (searchQuery !== '') setIsActive(true)
        }}
        onBlur={() => setIsActive(false)}
        autoComplete="off"
        placeholder="search moonbelly"
        ref={searchRef}
      />
      <ul
        className={
          isActive ? `${styles.subNav} ${styles.active}` : styles.subNav
        }
      >
        {isLoading ? (
          <ThreeDots
            height="40"
            width="40"
            wrapperClass={styles.loading}
            ariaLabel="three-dots-loading"
            visible={true}
          />
        ) : searchResults.data.length === 0 ? (
          <li className={styles.userMessage}>No results...</li>
        ) : (
          searchResults.data.map((result) => (
            <li className={styles.item} key={result._id}>
              <Link
                href={`/posts/${result.slug.current}`}
                onClick={handleClick}
              >
                {result.title}
              </Link>
            </li>
          ))
        )}
      </ul>
      <TbX onClick={handleShowMobileSearch} />
    </div>
  )
}

// Types
type OffCanvasSearchProps = {
  mobileSearchIsActive: boolean
  handleShowMobileSearch: () => void
  searchRef: React.RefObject<HTMLInputElement>
}

interface Post {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
  body: Object[]
  category: string
  mainImage: {
    _type: string
    alt: string
    asset: Object[]
  }
  publishedAt: string
  slug: { _type: string; current: string }
  tag: []
  title: string
}

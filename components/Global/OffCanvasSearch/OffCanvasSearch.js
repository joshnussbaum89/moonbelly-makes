// Components, hooks
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { TbSearch, TbX } from 'react-icons/tb'
import { Rings } from 'react-loader-spinner'

// Styles
import styles from './OffCanvasSearch.module.css'

/**
 * OffCanvasSearch Component (hidden until active)
 *
 * @param {boolean} mobileSearchIsActive
 * @param {function} handleShowMobileSearch
 * @param {object} searchRef
 * @returns Mobile search component
 */
export default function OffCanvasSearch({
  mobileSearchIsActive,
  handleShowMobileSearch,
  searchRef,
}) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState({})
  const [isActive, setIsActive] = useState(false)

  // Handle search logic
  const handleSearch = (e) => setSearchQuery(e.target.value)

  // 'POST' request to get search results
  const fetchResults = async () => {
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
  }

  // Reset state
  const handleClick = () => {
    setSearchQuery('')
    setSearchResults({})
    handleShowMobileSearch()
  }

  useEffect(() => {
    // IF input is empty, hide result container
    // ELSE get results
    if (searchQuery === '') {
      setSearchResults({})
      setIsActive(false)
    } else {
      fetchResults()
    }
  }, [searchQuery])

  return (
    <div
      className={
        mobileSearchIsActive
          ? `${styles.offCanvasContainer} ${styles.active}`
          : styles.offCanvasContainer
      }
    >
      <TbSearch />
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
        ref={searchRef}
      />
      <ul
        className={
          isActive ? `${styles.subNav} ${styles.active}` : styles.subNav
        }
      >
        {Object.keys(searchResults).length === 0 ? (
          <Rings
            height="50"
            width="50"
            wrapperClass={styles.loading}
            visible={true}
            ariaLabel="rings-loading"
          />
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
      <TbX onClick={handleShowMobileSearch} />
    </div>
  )
}

// Components
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { TbSearch } from 'react-icons/tb'
import { ThreeDots } from 'react-loader-spinner'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../../../lib/sanityClient'

// Styles
import styles from './TopBarSearch.module.css'

// Types
import { Post } from '../../../types'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

/**
 * TopBarSearch Component
 */
export default function TopBarSearch() {
  const [isActive, setIsActive] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<{ data: Post[] }>({
    data: [],
  })

  // Sanity image builder
  const builder = imageUrlBuilder(sanityClient)
  const urlFor = (source: SanityImageSource) => builder.image(source)

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
  }

  useEffect(() => {
    // IF input is empty, hide result container
    // ELSE get results
    if (searchQuery === '') {
      setSearchResults({ data: [] })
      setIsActive(false)
    } else {
      fetchResults()
    }
  }, [searchQuery])

  return (
    <div className={styles.searchContainer}>
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
          searchResults?.data?.map((result) => (
            <li className={styles.item} key={result._id}>
              <Link
                href={`/posts/${result.slug.current}`}
                onClick={handleClick}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={urlFor(result.mainImage).auto('format').url()}
                    alt={result.title}
                    width={50}
                    height={50}
                  />
                </div>
                <p>{result.title}</p>
              </Link>
            </li>
          ))
        )}
      </ul>
      <TbSearch />
    </div>
  )
}

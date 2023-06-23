// Components
import Link from 'next/link'
import Image from 'next/image'

// Helpers
import sanityClient from '../../../lib/sanityClient'
import imageUrlBuilder from '@sanity/image-url'
import { highlightMatchedSearchText } from '../../../lib/strings'

// Styles, images
import styles from './SearchResults.module.css'
import TagImage from '../../../public/tag.jpg'

// Types
import { SlimPost, Tag } from '../../../types'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

interface SearchResultsProps {
  searchResults: {
    posts: SlimPost[]
    tags: Tag[]
  }
  searchQuery: string
  handleClick: () => void
}

// Display search results
export default function SearchResults({
  searchResults,
  searchQuery,
  handleClick,
}: SearchResultsProps) {
  const { posts, tags } = searchResults

  // Sanity image builder
  const builder = imageUrlBuilder(sanityClient)
  const urlFor = (source: SanityImageSource) => builder.image(source)

  // Filter results
  const filteredPosts = posts?.map((result) => (
    <li className={styles.item} key={result._id}>
      <Link href={`/posts/${result.slug.current}`} onClick={handleClick}>
        <div className={styles.imageContainer}>
          <Image
            src={urlFor(result.mainImage).auto('format').url()}
            alt={result.title}
            width={50}
            height={50}
          />
        </div>
        <p>{highlightMatchedSearchText(searchQuery, result.title)}</p>
      </Link>
    </li>
  ))

  const filteredTags = tags?.map((result) => (
    <li className={styles.item} key={result._id}>
      <Link href={`/tags/${result.title.toLowerCase().replaceAll(' ', '-')}`} onClick={handleClick}>
        <div className={styles.imageContainer}>
          <Image src={TagImage} alt={result.title} width={50} height={50} />
        </div>
        <p>{highlightMatchedSearchText(searchQuery, result.title)}</p>
      </Link>
    </li>
  ))

  return (
    <>
      {posts?.length > 0 && (
        <li className={styles.title}>
          <span>Posts</span>
        </li>
      )}
      {filteredPosts}
      {tags?.length > 0 && (
        <li className={styles.title}>
          <span>Tags</span>
        </li>
      )}
      {filteredTags}
    </>
  )
}

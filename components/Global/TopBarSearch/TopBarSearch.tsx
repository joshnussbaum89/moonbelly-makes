// Components
import { TbSearch } from 'react-icons/tb'

// Styles
import styles from './TopBarSearch.module.css'

/**
 * TopBarSearch Component
 *
 * @returns Search input field
 */
export default function TopBarSearch() {
  return (
    <div className={styles.searchContainer}>
      <input
        type="search"
        id="search"
        name="search"
        placeholder="search moonbelly"
      />
      <TbSearch />
    </div>
  )
}

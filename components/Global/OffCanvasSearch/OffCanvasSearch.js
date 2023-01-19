// Components
import { TbSearch, TbX } from 'react-icons/tb'

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
  return (
    <div
      className={
        mobileSearchIsActive
          ? `${styles.offCanvasContainer} ${styles.active}`
          : styles.offCanvasContainer
      }
    >
      <TbSearch />
      <input
        type="search"
        id="search"
        name="search"
        placeholder="search moonbelly"
        ref={searchRef}
      />
      <TbX onClick={handleShowMobileSearch} />
    </div>
  )
}

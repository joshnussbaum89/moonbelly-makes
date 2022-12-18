import { TbSearch, TbX } from 'react-icons/tb'

import styles from './OffCanvasSearch.module.css'

export default function OffCanvasSearch({
  mobileSearchIsActive,
  handleShowMobileSearch,
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
      />
      <TbX onClick={handleShowMobileSearch} />
    </div>
  )
}

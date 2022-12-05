import { TbSearch } from 'react-icons/tb'

import styles from './TopBarSearch.module.css'

export default function TopBarSearch() {
  return (
    <div className={styles.searchContainer}>
      <input type="search" name="search" id="search" />
      <TbSearch />
    </div>
  )
}

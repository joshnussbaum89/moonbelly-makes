// Components
import Link from 'next/link'

// Styles
import styles from './NavItem.module.css'

export default function NavItem({ item, side }: NavItemProps) {
  return (
    <li className={styles.navItem}>
      <Link href={item.href} className={styles.animatedLink}>
        {item.title}
      </Link>
      {item.subNav && (
        <ul className={styles.subNav} data-side={side}>
          {item.subNav.map((subNavItem) => (
            <li key={subNavItem.id}>
              <Link href={subNavItem.href}>{subNavItem.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

// Types
interface NavItemProps {
  item: Item
  side: string
}

type Item =
  | {
      id: number
      title: string
      href: string
      subNav: {
        id: number
        title: string
        href: string
      }[]
    }
  | {
      id: number
      title: string
      href: string
      subNav: null
    }

import styles from 'styles/NavBar.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { GiPlanetCore, GiSpaceship } from 'react-icons/gi';
import { FaUsers, FaShuttleVan } from 'react-icons/fa';

const navItems = [
  {
    label: 'Planets',
    route: '/',
    icon: <GiPlanetCore />,
  },
  {
    label: 'Starships',
    route: '/starships',
    icon: <GiSpaceship />,
  },
  {
    label: 'People',
    route: '/people',
    icon: <FaUsers />,
  },
  {
    label: 'Vehicles',
    route: '/vehicles',
    icon: <FaShuttleVan />,
  },
];

export default function NavBar() {
  const router = useRouter();
  const { route } = router;
  return (
    <div className={styles.container}>
      <p className={styles.logo}>SWAPI APP</p>
      <ul className={styles.navList}>
        {navItems.map((navItem, key) => (
          <li key={key} title={navItem.label}>
            <Link href={navItem.route}>
              <p
                className={`${styles.label} ${
                  route === navItem.route ? styles.selected : ''
                }`}
              >
                <span className={styles.icon}>{navItem.icon}</span>
                <span className={styles.text}>{navItem.label}</span>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

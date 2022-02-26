import styles from 'styles/NavBar.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  {
    label: 'Planets',
    route: '/',
    icon: '',
  },
  {
    label: 'Starships',
    route: '/starships',
    icon: '',
  },
  {
    label: 'People',
    route: '/people',
    icon: '',
  },
  {
    label: 'Vehicles',
    route: '/vehicles',
    icon: '',
  },
];

export default function NavBar() {
  return (
    <>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      <ul>
        {navItems.map((navItem, key) => (
          <li key={key}>
            <Link href={navItem.route}>
              <h1 title={navItem.label}>{navItem.label}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

import Image from 'next/image'
import styles from '../../styles/Header.module.scss'

const Header = (): JSX.Element => (
  <div className={styles.header}>
    <div>
      <Image src="/logo.svg" alt="Logo" height="32" width="32" />
    </div>
  </div>
)

export default Header;

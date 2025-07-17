
import Navbar from "./navbar/Navbar.jsx"
import Logo from './logo/Logo.jsx'
import Language from "./language/Language.jsx"
import Social from "./social/Social.jsx"
import styles from './Header.module.css'
import { useWindowScroll } from 'react-use'
 

const Header = ({ props }) => {
  const { pathName } = props

  const { y } = useWindowScroll()

  return (
    <div className={`
      ${styles.header} 
      ${pathName === '/' ? styles.headerHomePage : styles.headerOtherPages}
      ${y > 0 ? styles.headerBlack : ''}
      `}>
      <Logo props={props} />
      <Navbar props={props} />
      <Language props={props} />
      <Social />
    </div>
  )
}

export default Header
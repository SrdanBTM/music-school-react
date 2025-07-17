
import styles from '../navbar/Navbar.module.css'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navbar = ({ props }) => {
  const { data, language, setPathName } = props

  const [isNavOpened, setIsNavOpened] = useState(false)

  const location = useLocation()
  useEffect(() => {
    setPathName(location.pathname)
  }, [location.pathname])


  const currentLang = data[language.lang1]


  return (
    <nav className={styles.nav}>
      <ul className={styles.mainNav}>
        <li>
          <NavLink to='/'>{currentLang.nav.main.home}</NavLink>
        </li>
        <li
          onMouseEnter={() => setIsNavOpened('sections')}
          onMouseLeave={() => setIsNavOpened(false)}>
          <NavLink to='/sections'>{currentLang.nav.main.sections}</NavLink>
          <ul className={`${styles.subNav} ${isNavOpened === 'sections' ? styles.showNav : ''}`}>
            {Object.keys(currentLang.nav.sections).map(sectionKey => {
              return (
                <li key={currentLang.nav.sections[sectionKey].id}>
                  <Link to={`/sections/${sectionKey}`}>{currentLang.nav.sections[sectionKey].title}</Link>
                </li>
              )
            })}
          </ul>
        </li>
        <li
          onMouseEnter={() => setIsNavOpened('about-us')}
          onMouseLeave={() => setIsNavOpened(false)}>
          <NavLink to='/about'>{currentLang.nav.main.aboutUs}</NavLink>
          <ul className={`${styles.subNav} ${isNavOpened === 'about-us' ? styles.showNav : ''}`}>
            <li>
              <Link to='/about/about-school'>{currentLang.nav.aboutUs.aboutTheSchool.title}</Link>
            </li>
            <li>
              <Link to='/about/our-team'>{currentLang.nav.aboutUs.ourTeam.title}</Link>
            </li>
          </ul>
        </li>
        <li
          onMouseEnter={() => setIsNavOpened('contact')}
          onMouseLeave={() => setIsNavOpened(false)}>
          <NavLink to='/contact'>{currentLang.nav.main.contact}</NavLink>
          <ul className={`${styles.subNav} ${isNavOpened === 'contact' ? styles.showNav : ''}`}>
            <li>
              <Link to='/contact/contact-details'>{currentLang.nav.contact.contactDetails.title}</Link>
            </li>
            <li>
              <Link to='/contact/send-message'>{currentLang.nav.contact.sendMessage.title}</Link>
            </li>
            <li>
              <Link to='/contact/find-us'>{currentLang.nav.contact.findUs.title}</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
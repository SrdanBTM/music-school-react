
import { Outlet, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from '../components/header-components/Header.jsx'
import Footer from '../components/footer-components/footer/Footer.jsx'
import data from '../data/data.js'
import styles from './MainLayout.module.css'

const MainLayout = () => {
  const [language, setLanguage] = useState({
    lang1: 'en',
    lang2: 'de'
  })

  const [pathName, setPathName] = useState('home')

  const { pathname } = useLocation()
  useEffect(() => {
    const allSections = Object.keys(data[language.lang1].sections)
    const allSectionsPath = allSections.map(section => `/sections/${section}`)

    if (allSectionsPath.includes(pathname)) {
      window.scrollTo(0,50) 
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])


  return (
    <div className={styles.container}>
      <Header props={{ data, language, setLanguage, setPathName, pathName }} />
      <div className={pathName === '/' ? styles.paddingHomePage : styles.paddingOtherPages}>
        <Outlet context={{ data, language, pathName }} />
      </div>
      <Footer pathName={pathName} props={{ data, language }} />
    </div>
  )
}

export default MainLayout
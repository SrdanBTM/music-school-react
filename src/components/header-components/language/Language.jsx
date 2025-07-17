
import styles from './Language.module.css'
import { useState } from 'react'


const Language = ({ props }) => {
  const { data, language, setLanguage } = props

  const [isNavOpened, setIsNavOpened] = useState(false)


  const langEn = { lang1: 'en', lang2: 'de' }
  const langDe = { lang1: 'de', lang2: 'en' }

  const handleClick = (e) => {
    if (e.target.innerText === 'EN') {
      setLanguage(langEn)
    } else if (e.target.innerText === 'DE') {
      setLanguage(langDe)
    }
  }

  return (
    <div className={styles.language}>
      <ul className={styles.mainNav}>
        <li
          onMouseEnter={() => setIsNavOpened('language')}
          onMouseLeave={() => setIsNavOpened(false)}>
          <span>{data[language.lang1].nav.main.language}</span>
          <ul className={`${styles.subNav} ${isNavOpened === 'language' ? styles.showNav : ''}`}>
            <li onClick={(e) => handleClick(e)}>
              <span>{data[language.lang2].nav.main.language}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Language
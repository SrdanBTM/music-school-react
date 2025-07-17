
import styles from './FirstPage.module.css'
import { useOutletContext, Link } from 'react-router-dom'

const FirstPage = () => {
  
  const { data, language } = useOutletContext()
  const currentLang = data[language.lang1]

  return (
    <div className={styles.firstPage}>
      <div className={styles.content}>
        <div>
          <h1>{currentLang.homeHeading}</h1>
          <h1>Harmonious Heights</h1>
        </div>
        <p>{currentLang.homeText}</p>
        <Link to='/about' className='button button-gold'>{currentLang.button.findOutMore}</Link>
      </div>
    </div>
  )
}

export default FirstPage
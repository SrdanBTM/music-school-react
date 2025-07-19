
import styles from './FirstPage.module.css'
import { useOutletContext, Link } from 'react-router-dom'

const FirstPage = () => {
  
  const { data, language } = useOutletContext()
  const currentLang = data[language.lang1]

  const BASE_URL = import.meta.env.BASE_URL

  return (
    <div className={styles.container} style={{backgroundImage:`url(${BASE_URL}images/background/bg1.jpg)`}}>
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
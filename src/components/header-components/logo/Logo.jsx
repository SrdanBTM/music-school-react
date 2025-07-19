
import styles from './Logo.module.css'

const Logo = ({ props }) => {
  const { data, language } = props
  
  const BASE_URL = import.meta.env.BASE_URL

  return (
    <div className={styles.container}>
      <img src={`${BASE_URL}images/icons/logo-icon.png`} alt="logo icon" />
      <div className={styles.title}>
        <span>Harmonious Heights</span>
        <span>{data[language.lang1].homeHeading}</span>
      </div>
    </div>
  )
}

export default Logo
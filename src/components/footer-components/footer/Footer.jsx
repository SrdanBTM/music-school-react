
import AnyQuestions from '../any-questions/AnyQuestions.jsx'
import styles from './Footer.module.css'

const Footer = ({ props, pathName }) => {
  const { data, language } = props

  const currentLang = data[language.lang1]

  const BASE_URL = import.meta.env.BASE_URL

  return (
    <div className={styles.container} style={{ backgroundImage: `url(${BASE_URL}images/background/bg2.jpg)` }}>

      {pathName === '/' && <AnyQuestions props={props} />}

      <div className={`${styles.top} ${pathName === '/' ? styles.homePageFooterPadding : ''}`}>

        <div className={styles.contact}>
          <h3>{currentLang.titles.contact}</h3>
          <div className={styles.content}>
            {Object.keys(currentLang.footer.contact).map(contactKey => {
              return (
                <span key={contactKey}>
                  <img src={`${BASE_URL}${currentLang.footer.contact[contactKey].image}`} alt="icon" />
                  <p>{currentLang.footer.contact[contactKey].text}</p>
                </span>
              )
            })}
          </div>
        </div>

        <div className={styles.hours}>
          <h3>{currentLang.titles.operatingHours}</h3>
          <div className={styles.content}>
            {Object.keys(currentLang.footer.operatingHours).map(contactKey => {
              return (
                <span key={contactKey}>
                  <img src={`${BASE_URL}${currentLang.footer.operatingHours[contactKey].image}`} alt="icon" />
                  <p>{currentLang.footer.operatingHours[contactKey].text}</p>
                </span>
              )
            })}
          </div>
        </div>

      </div>

      <div className={styles.bottom}>
        {currentLang.footer.footerText}
      </div>

    </div>
  )
}

export default Footer
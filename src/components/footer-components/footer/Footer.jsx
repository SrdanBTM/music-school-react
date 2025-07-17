
import AnyQuestions from '../any-questions/AnyQuestions.jsx'
import styles from './Footer.module.css'

const Footer = ({ props, pathName }) => {
  const { data, language } = props

  const currentLang = data[language.lang1]

  return (
    <div className={styles.footer}>

      {pathName === '/' && <AnyQuestions props={props} />}

      <div className={`${styles.top} ${pathName === '/' ? styles.homePageFooterPadding : ''}`}>

        <div className={styles.contact}>
          <h3>{currentLang.titles.contact}</h3>
          <div className={styles.content}>
            {Object.keys(currentLang.footer.contact).map(contactKey => {
              return (
                <span key={contactKey}>
                  <img src={currentLang.footer.contact[contactKey].image} alt="icon" />
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
                  <img src={currentLang.footer.operatingHours[contactKey].image} alt="icon" />
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
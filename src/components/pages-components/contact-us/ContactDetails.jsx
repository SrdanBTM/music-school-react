
import Wraper from "../../wraper/Wraper.jsx"
import { useOutletContext } from 'react-router-dom'
import styles from './ContactDetails.module.css'

const ContactDetails = () => {
  const { data, language } = useOutletContext()
  const currentLang = data[language.lang1]

  return (
    <Wraper title={currentLang.titles.contactDetails}>
      <div className={styles.container}>
        {Object.keys(currentLang.contactDetails).map(contactKey => {
          return (
            <div key={contactKey} className={styles.contact}>
              <a href={currentLang.contactDetails[contactKey].href}>
                <img src={currentLang.contactDetails[contactKey].image} alt="icon" />
                <p>{currentLang.contactDetails[contactKey].title}</p>
              </a>
            </div>
          )
        })}
      </div>
    </Wraper>
  )
}

export default ContactDetails
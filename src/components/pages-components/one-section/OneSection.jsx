
import { useOutletContext, useParams } from 'react-router-dom'
import Wraper from '../../wraper/Wraper.jsx'
import styles from './OneSection.module.css'

const OneSection = () => {
  const { data, language } = useOutletContext()
  const currentLang = data[language.lang1]

  const toAttributeObject  = useParams()
  const sectionName = toAttributeObject.id

  const BASE_URL = import.meta.env.BASE_URL

  return (
    <Wraper>
      <div className={styles.container}>
        <div className={styles.info}>
          <h3>{currentLang.sections[sectionName].title}</h3>

          <div className={styles.content}>
            <div>
              <p>{currentLang.sectionsTitles.description}</p>
              <p>{currentLang.sections[sectionName].description}</p>
            </div>

            <div>
              <p>{currentLang.sectionsTitles.startDate}</p>
              <p>{currentLang.sections[sectionName].startDate}</p>
            </div>

            <div>
              <p>{currentLang.sectionsTitles.instructor}</p>
              <p>{currentLang.sections[sectionName].instructorName} {currentLang.sections[sectionName].instructorDescription}</p>
            </div>
          </div>
        </div>

        <div className={styles.image}>
          <img src={`${BASE_URL}${currentLang.sections[sectionName].image}`} alt="section image" />
        </div>
      </div>
    </Wraper>
  )
}

export default OneSection
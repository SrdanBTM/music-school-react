
import Wraper from '../../wraper/Wraper.jsx'
import { useOutletContext, Link } from 'react-router-dom'
import styles from './ChooseYourSection.module.css'

const ChooseYourSection = () => {

  const { data, language } = useOutletContext()
  const currentLang = data[language.lang1]

  const BASE_URL = import.meta.env.BASE_URL

  return (
    <Wraper title={currentLang.titles.chooseYourSection}>
      <div className={styles.container} >
        {Object.keys(currentLang.chooseYourSection).map(sectionKey => {
          return (
            <Link to={`/sections/${sectionKey}`} className={styles.oneSection} key={currentLang.chooseYourSection[sectionKey].id}>
              <img src={`${BASE_URL}${currentLang.chooseYourSection[sectionKey].image}`} alt="sections instrument" />
              <h4>{currentLang.chooseYourSection[sectionKey].title}</h4>
            </Link>
          )
        })}
      </div>
    </Wraper>
  )
}

export default ChooseYourSection
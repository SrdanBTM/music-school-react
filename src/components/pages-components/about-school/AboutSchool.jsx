
import styles from './AboutSchool.module.css'
import { useOutletContext } from 'react-router-dom'
import Wraper from '../../wraper/Wraper.jsx'

const AboutSchool = () => {

  const { data, language } = useOutletContext()
  const currentLang = data[language.lang1]
  

  return (
    <Wraper title={currentLang.titles.aboutTheSchool}>
      <div className={styles.text}>
        {currentLang.aboutTheSchool.map((paragraf, index) => {
          return (
            <p key={index}>{paragraf}</p>
          )
        })}
      </div>
      <div className={styles.image}>
        <img src='/images/background/bg7.jpeg' alt="school image" />
      </div>
    </Wraper>
  )
}

export default AboutSchool
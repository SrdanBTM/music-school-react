
import styles from './AnyQuestions.module.css'
import { Link } from 'react-router-dom'

const AnyQuestions = ({ props }) => {
  const { data, language } = props

  const currentLang = data[language.lang1]

  return (
    <div className={styles.anyQuestions}>
      <div className={styles.content}>
        <p>{currentLang.anyQuestionText}</p>
        <Link to='/contact' className='button button-gray'>{currentLang.button.contact}</Link>
      </div>
    </div>
  )
}

export default AnyQuestions
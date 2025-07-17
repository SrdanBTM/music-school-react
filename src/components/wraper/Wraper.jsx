
import styles from './Wraper.module.css'

const Wraper = ({ children, title }) => {
  return (
    <div className={`${styles.wraper}`}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  )
}

export default Wraper
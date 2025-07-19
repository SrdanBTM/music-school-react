
import styles from './Social.module.css'

const Social = () => {

  const BASE_URL = import.meta.env.BASE_URL

  return (
    <div className={styles.container}>
      <a href="https://www.youtube.com">
        <img src={`${BASE_URL}images/icons/youtube-icon.png`} alt="youtube icon" />
      </a>
      <a href="https://www.twitter.com">
        <img src={`${BASE_URL}images/icons/twitter-icon.png`} alt="twitter icon" />
      </a>
      <a href="https://www.facebook.com">
        <img src={`${BASE_URL}images/icons/facebook-icon.png`} alt="facebook icon" />
      </a>
    </div>
  )
}

export default Social


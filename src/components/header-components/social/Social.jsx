
import styles from './Social.module.css'

const Social = () => {
  return (
    <div className={styles.social}>
      <a href="https://www.youtube.com">
        <img src="/images/icons/youtube-icon.png" alt="youtube icon" />
      </a>
      <a href="https://www.twitter.com">
        <img src="/images/icons/twitter-icon.png" alt="twitter icon" />
      </a>
      <a href="https://www.facebook.com">
        <img src="/images/icons/facebook-icon.png" alt="facebook icon" />
      </a>
    </div>
  )
}

export default Social


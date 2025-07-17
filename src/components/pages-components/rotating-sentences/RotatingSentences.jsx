
import styles from './RotatingSentences.module.css'
import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

const RotatingSentences = () => {
  const { data, language } = useOutletContext()
  const currentLang = data[language.lang1]

  const [index, setIndex] = useState(0)
  const [position, setPosition] = useState('right')

  useEffect(() => {
    const center = setTimeout(()=>[
      setPosition('center')
    ],10)

    const left = setTimeout(()=>{
      setPosition('left')
    },3000)

    const right = setTimeout(()=>{
      setPosition('right')
      setIndex(prev => prev === currentLang.rotatingSentences.length-1 ? 0 : prev+1)
    },4500)

    return ()=> {
      clearInterval(center)
      clearInterval(left)
      clearInterval(right)
    }

  }, [index])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles[position]}>{currentLang.rotatingSentences[index]}</p>
      </div>
    </div>
  )
}

export default RotatingSentences
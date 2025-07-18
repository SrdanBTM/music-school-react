
import styles from './OurTeam.module.css'
import { useOutletContext } from 'react-router-dom'
import { useState } from 'react'
import Wraper from '../../wraper/Wraper.jsx'

const OurTeam = () => {

  const { data, language } = useOutletContext()
  const currentLang = data[language.lang1]

  const BASE_URL = import.meta.env.BASE_URL

  const [isExpanded, setIsExpanded] = useState({
    oliviaLewis: false,
    emilyClark: false,
    danielGreen: false,
    samanthaKing: false,
    michaelReed: false,
    davidCarter: false
  })



  const handleClick = (e, teamKey) => {
    setIsExpanded(prev => (
      {
        ...prev,
        [teamKey]: !prev[teamKey]
      }
    ))

    const element = e.currentTarget.getBoundingClientRect()
    const position = element.top + window.scrollY - 200
    window.scrollTo({
      top: position,
      behavior: 'smooth'
    })
  }


  const teamKeys = Object.keys(currentLang.ourTeam)
  const columnsTeamKeys = [[], []]
  teamKeys.forEach((key, index) => {
    if (index % 2 === 0) {
      columnsTeamKeys[0].push(key)
    } else {
      columnsTeamKeys[1].push(key)
    }
  })


  return (
    <Wraper title={currentLang.titles.ourTeam}>
      <div className={styles.container}>
        <div className={styles.team}>
          {columnsTeamKeys.map((column, index) => (
            <div key={index} className={styles.column}>
              {column.map(teamKey => (
                <div onClick={(e) => handleClick(e, teamKey)} key={teamKey} className={styles.instructor}>
                  <div className={styles.mainContent}>
                    <img src={`${BASE_URL}${currentLang.ourTeam[teamKey].img}`} alt="instructor photo" />
                    <div className={styles.title}>
                      <h4>{currentLang.ourTeam[teamKey].name}</h4>
                      <h4>{currentLang.ourTeam[teamKey].section}</h4>
                    </div>
                  </div>
                  <div className={`${styles.infoContent} ${isExpanded[teamKey] ? styles.showInfo : styles.hideInfo}`}>
                    <p>{currentLang.ourTeam[teamKey].basicInfo}</p>
                    <p>{currentLang.ourTeam[teamKey].about}</p>
                  </div>
                </div>
              )
              )}
            </div>
          )
          )}
        </div>
      </div>
    </Wraper>
  )
}

export default OurTeam


import Wraper from '../../wraper/Wraper'
import styles from './SendMessage.module.css'
import { useOutletContext } from 'react-router-dom'
import { useState } from 'react'
import emailjs from '@emailjs/browser'


const SendMessage = () => {
  const { data, language } = useOutletContext()
  const currentLang = data[language.lang1]

  const emptyFormData = {
    name: '',
    email: '',
    message: ''
  }

  const [formData, setFormData] = useState(emptyFormData)

  const [buttonTitle, setButtonTitle] = useState(currentLang.button.send)
  const [buttonColor, setButtonColor] = useState(styles.submitButtonSendBg)



  const handleSubmit = e => {
    e.preventDefault()

    setButtonTitle(currentLang.button.loading)
    setButtonColor(styles.submitButtonLoadingBg)

    emailjs.sendForm(
      'service_as8sd28',
      'template_1xn7fog',
      e.target,
      'xeUiKfkYZxe6vyKt1'
    )
    .then(()=>{
      setButtonTitle(currentLang.button.success)
      setButtonColor(styles.submitButtonSuccessBg)
      setFormData(emptyFormData)
    })
    .then(()=>{
      setTimeout(() => {
        setButtonTitle(currentLang.button.send)
        setButtonColor(styles.submitButtonSendBg)
      }, 3000)
    })
    .catch(()=>{
      setButtonTitle(errorMessage)
      setButtonColor(styles.submitButtonErrorBg)
    })

  }

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))

    setButtonTitle(currentLang.button.send)
    setButtonColor(styles.submitButtonSendBg)
  }



  const handleInvalid = e => {
    e.preventDefault()

    const errorKeys = {
      'valueMissing': {
        name: 'valueMissing',
        message: currentLang.button.errorValueMissing
      },
      'tooShort': {
        name: 'tooShort',
        message: currentLang.button.errorTooShort
      },
      'typeMismatch': {
        name: 'typeMismatch',
        message: currentLang.button.errorTypeMismatch
      },
      'badInput': {
        name: 'badInput',
        message: currentLang.button.errorBadInput
      }
    }

    const foundError = Object.keys(errorKeys).find(errorKey => e.target.validity[errorKey])
    const errorMessage = foundError ? errorKeys[foundError].message : currentLang.button.errorAnother

    setButtonTitle(errorMessage)
    setButtonColor(styles.submitButtonErrorBg)

  }


  return (
    <Wraper title={currentLang.titles.sendUsMessage}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <input
            value={formData.name}
            onChange={handleChange}
            onInvalid={handleInvalid}
            name='name'
            type="text"
            required
            minLength={2}
            placeholder={currentLang.sendUsMessage.placeholder.nameInput} />

          <input
            value={formData.email}
            onChange={handleChange}
            onInvalid={handleInvalid}
            name='email'
            type="email"
            required
            placeholder={currentLang.sendUsMessage.placeholder.emailInput} />

          <textarea
            value={formData.message}
            onChange={handleChange}
            onInvalid={handleInvalid}
            name='message'
            rows='5'
            required
            minLength={10}
            placeholder={currentLang.sendUsMessage.placeholder.textarea}></textarea>

          <button className={`button button-width100 ${buttonColor}`}>{buttonTitle}</button>
        </form>
      </div>
    </Wraper>
  )
}

export default SendMessage
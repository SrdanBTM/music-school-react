

import { Outlet } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'

const ContactLayout = () => {
  const { data, language } = useOutletContext()

  return (
    <div>
      <Outlet context={{ data, language }} />
    </div>
  )
}

export default ContactLayout

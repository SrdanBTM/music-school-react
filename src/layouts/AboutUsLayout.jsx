
import { Outlet } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom'

const AboutUsLayout = () => {
  const { data, language } = useOutletContext()

  return (
    <div>
      <Outlet context={{ data, language }} />
    </div>
  )
}

export default AboutUsLayout
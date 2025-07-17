
import { Outlet, useOutletContext } from 'react-router-dom'

const SectionsLayout = () => {
  const { data, language } = useOutletContext()

  return (
    <div>
      <Outlet context={{ data, language }} />
    </div>
  )
}

export default SectionsLayout
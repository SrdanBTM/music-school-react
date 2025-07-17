
import { createHashRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.jsx'
import HomePage from '../pages/HomePage.jsx'
import AboutUsLayout from '../layouts/AboutUsLayout.jsx'
import AboutSchool from '../components/pages-components/about-school/AboutSchool.jsx'
import OurTeam from '../components/pages-components/our-team/OurTeam.jsx'
import ContactLayout from '../layouts/ContactLayout.jsx'
import ContactDetails from '../components/pages-components/contact-us/ContactDetails.jsx'
import SendMessage from '../components/pages-components/send-message/SendMessage.jsx'
import FindUs from '../components/pages-components/find-us/FindUs.jsx'
import SectionsLayout from '../layouts/SectionsLayout.jsx'
import ChooseYourSection from '../components/pages-components/choose-your-section/ChooseYourSection.jsx'
import OneSection from '../components/pages-components/one-section/OneSection.jsx'

const routes = [
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'sections',
        element: <SectionsLayout />,
        children: [
          {
            path: '',
            element: <ChooseYourSection />
          },
          {
            path: ':id',
            element: <OneSection />
          }
        ]
      },
      {
        path: 'about',
        element: <AboutUsLayout />,
        children: [
          {
            path: '',
            element: (
              <>
                <AboutSchool />
                <OurTeam />
              </>
            )
          },
          {
            path: 'about-school',
            element: <AboutSchool />
          },
          {
            path: 'our-team',
            element: <OurTeam />
          }
        ]
      },
      {
        path: 'contact',
        element: <ContactLayout />,
        children: [
          {
            path: '',
            element: (
              <>
                <ContactDetails />
                <SendMessage />
                <FindUs />
              </>
            )
          },
          {
            path: 'contact-details',
            element: <ContactDetails />
          },
          {
            path: 'send-message',
            element: <SendMessage />
          },
          {
            path: 'find-us',
            element: <FindUs />
          }
        ]
      }
    ]
  }
]

const router = createHashRouter(routes)

export default router


import Header from '../components/Header/Header'
import FooterSection from '../components/Footer/Footer'
import Router from '../route/Router'

function Layout() {
  return (
    <>
     <Header />
     <main>
      <Router />
     </main>
     <FooterSection />
    </>
  )
}

export default Layout
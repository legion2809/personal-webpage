import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import AboutMe from './components/AboutMe/AboutMe'
import Portfolio from './components/Portfolio/Portfolio'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <div id="content">
      <Header />

      <main>
        <Intro />
        <AboutMe />
        <Portfolio />
        <Contacts />
      </main>

      <Footer />
    </div>
  )
}

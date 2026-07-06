import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Story from './components/Story'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Visit from './components/Visit'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Story />
        <Menu />
        <Gallery />
        <Visit />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

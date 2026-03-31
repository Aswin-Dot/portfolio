import { useEffect } from 'react'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import Ticker from './components/Ticker'
import Work from './components/Work'
import Thinking from './components/Thinking'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useWindowSize } from './hooks/useWindowSize'

export default function App() {
  useScrollReveal()
  const { isMobile, isTablet } = useWindowSize()

  useEffect(() => {
    document.title = 'Aswin Raj — Product Engineer'
  }, [])

  return (
    <>
      <Cursor />
      <div style={{ minHeight: '100vh', background: '#fff' }}>
        <Nav isMobile={isMobile} />
        <main>
          <Hero isMobile={isMobile} isTablet={isTablet} />
          <VideoSection isMobile={isMobile} isTablet={isTablet} />
          <Ticker />
          <Work isMobile={isMobile} isTablet={isTablet} />
          <Thinking isMobile={isMobile} />
          <About isMobile={isMobile} />
          <Contact isMobile={isMobile} />
        </main>
        <Footer isMobile={isMobile} />
      </div>
    </>
  )
}

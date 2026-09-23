import { MotionConfig } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Why from './components/Why'
import Featured from './components/Featured'
import PhotoFit from './components/PhotoFit'
import Steps from './components/Steps'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import Footer from './components/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        <Hero />
        <Categories />
        <Why />
        <Featured />
        <PhotoFit />
        <Steps />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </MotionConfig>
  )
}
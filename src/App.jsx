
import { Contact } from 'lucide-react'
import './App.css'
import Benefits from './components/benefit'
import LotteryCountdown from './components/countdown'
import FAQ from './components/faq'
import HowItWorks from './components/howItworks'
import LotteryLanding from './components/landing'
import LiveStats from './components/liveStats'
import WhyChooseUs from './components/whyChooseus'
import ContactForm from './components/contactForm'
import Footer from './components/footer'
import SpinTheWheel from './components/spinTheWheel'


function App() {
  

  return (
    <>
      <LotteryLanding />
      <LotteryCountdown />
      <SpinTheWheel />
      <WhyChooseUs />
      <HowItWorks />
      <LiveStats />
      <Benefits />
      <FAQ />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App

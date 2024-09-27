import About from "../components/About"
import Booking from "../components/Booking"
import HeroSection from "../components/HeroSection"
import InfoGrid from "../components/InfoGrid"
import LoveHome from "../components/LoveHome"
import Navbar from "../components/Navbar"

const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <About />
        <InfoGrid />
        <Booking />
        <LoveHome />
    </div>
  )
}

export default Home
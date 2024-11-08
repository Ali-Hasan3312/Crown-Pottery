import { lazy, Suspense, useRef } from 'react';
import GotoTopButton from '../components/GotoTopButton';
import OurGallery from '../components/OurGallery';
import CustomProducts from '../components/CustomProducts';
import Loader from '../components/Loader';
const Navbar = lazy(() => import("../components/Navbar"));
const HeroSection = lazy(() => import("../components/HeroSection"));
const About = lazy(() => import("../components/About"));
const InfoGrid = lazy(() => import("../components/InfoGrid"));
const Booking = lazy(() => import("../components/Booking"));
const LoveHome = lazy(() => import("../components/LoveHome"));
const Contact = lazy(() => import("../components/Contact"));
const Home = () => {
  // Creating refs for each component

  const heroSectionRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const menusRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const bookingRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const handleScrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleScrollToBooking = () => {
    if (bookingRef.current) {
      bookingRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleScrollToMenus = () => {
    if (menusRef.current) {
      menusRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleScrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleScrollToHome = () => {
    if (heroSectionRef.current) {
      heroSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleScrollToGallery = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Navbar
          onScrollToContact={handleScrollToContact}
          onScrollToBooking={handleScrollToBooking}
          onScrollToMenus={handleScrollToMenus}
          onScrollToAbout={handleScrollToAbout}
          onScrollToLanding={handleScrollToHome}
          onScrollToGallery={handleScrollToGallery}
        />
        <HeroSection ref={heroSectionRef} />
        <GotoTopButton />
        <CustomProducts />
        <InfoGrid  />
        <OurGallery ref={galleryRef} />
        <About ref={aboutRef} />
        <LoveHome  />
        <Booking ref={bookingRef} />
        <Contact ref={contactRef} />
      </Suspense>
    </div>
  );
};

export default Home;

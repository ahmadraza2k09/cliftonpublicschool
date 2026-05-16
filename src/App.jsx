import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import NoticeBar from './components/NoticeBar.jsx';
import About from './components/About.jsx';
import Principal from './components/Principal.jsx';
import Admissions from './components/Admissions.jsx';
import Academics from './components/Academics.jsx';
import Facilities from './components/Facilities.jsx';
import Events from './components/Events.jsx';
import Gallery from './components/Gallery.jsx';
import Social from './components/Social.jsx';
import Testimonials from './components/Testimonials.jsx';
import Achievements from './components/Achievements.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import {
  ScrollProgress,
  BackToTop,
  FloatingSocialSidebar,
  StickyMobileCTA,
  PageLoader,
} from './components/FloatingUI.jsx';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <PageLoader done={loaded} />
      <ScrollProgress />
      <Navbar />
      <FloatingSocialSidebar />

      <main>
        <Hero />
        <NoticeBar />
        <About />
        <Principal />
        <Admissions />
        <Academics />
        <Facilities />
        <Events />
        <Gallery />
        <Social />
        <Testimonials />
        <Achievements />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
      <StickyMobileCTA />
    </>
  );
}

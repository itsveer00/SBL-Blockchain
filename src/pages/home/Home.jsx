import React from 'react';
import Particle from './Particle.component';
import ParticleText from './ParticleText.component';
import Services from '../services/Services';
import Industries from '../teams/Teams';
// import Blogs from '../blogs/Blogs';
// import Career from '../career/Career';
import About from '../about/About';
import Contact from '../contact/Contact';

const Home = () => {
  return (
    <>
    <div id='home'>
    <Particle />
    <ParticleText />
    <About />
    <Services />
    <Industries />
    {/* <Blogs /> */}
    {/* <Career /> */}
    <Contact />
    </div>
    </>
  )
}

export default Home
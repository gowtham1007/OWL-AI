// import { BrowserRouter } from 'react-router-dom'
// import Foot from './Components/Foot'
// import Navbar from "./Components/Navbar"
// import About from './Pages/About'
// import Contact from './Pages/ContactUs'
// import Hero from './Pages/Hero'
// import Offers from './Pages/Offers'
// import Services from './Pages/Services'
// import Social from './Pages/Social'
// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <BrowserRouter>
//       <Hero/>
//       <About/>
//       <Services/>
//       <Social/>
//       <Offers/>
//       <Contact/>
//       </BrowserRouter>
//       <Foot/>
//     </div>
//   )
// }

// export default App

import Foot from "./Components/Foot";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Git from './Pages/Git';
import Hero from "./Pages/Hero";
import Offers from "./Pages/Offers";
import Services from "./Pages/Services";
import Social from "./Pages/Social";
const App = () => {
  return (
    <>
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="social"><Social /></section>
      <section id="offers"><Offers /></section>
      <section id="git"><Git/></section>
      <Foot />
    </>
  );
};

export default App;

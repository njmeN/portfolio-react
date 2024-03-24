import React from "react";
import './App.css';
import Sidebar from './components/sidebar/sidebar.jsx';
import Home from './components/home/home.jsx';
import About from './components/about/about.jsx';
import Services from "./components/services/services";
import Resume from './components/reusme/resume.jsx';
import Portfolio from "./components/portfolio/portfolio.jsx";
import Pricing from "./components/pricing/pricing";
import Testimonials from "./components/Testimonials/testimonials.jsx";
import Blog from './components/Blog/blog.jsx';
import Contact from './components/contact/contact.jsx'

function App() {
  return (
    <div className="App">
         <Sidebar/>
         <main className="main">
            <Home/>
            <About/>
            <Services />
            <Resume />
            <Portfolio />
            <Pricing />
            <Testimonials />
            <Blog />
            <Contact />
         </main>

    </div>
  );
}

export default App;

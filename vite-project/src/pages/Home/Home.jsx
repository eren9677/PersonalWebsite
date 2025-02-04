import React, { useState, useEffect } from "react";
import About from './About/About.jsx';
import Career from './Career/Career.jsx';
import Certificates from './Certificates/Certificates.jsx';
import Projects from './Projects/Projects.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';

import { useSocialContext } from '../../SocialContext';

function Home({ setIsSidebarActive }) {
  const [activeComponent, setActiveComponent] = useState("about");

  const { setIsEmailFlipped } = useSocialContext();
  const { setIsPhoneFlipped } = useSocialContext();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsEmailFlipped(false); // activeComponent değişince kartı ön yüze çevir
    setIsPhoneFlipped(false); // activeComponent değişince kartı ön yüze çevir
  }, [activeComponent, setIsEmailFlipped, setIsPhoneFlipped]);

  const renderComponent = () => {
    switch (activeComponent) {
      case "about":
        return <About />;
      case "resume":
        return <Career />;
      case "certificate":
        return <Certificates />;
      case "project":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  const handleComponentChange = (component) => {
    setActiveComponent(component);
    setIsSidebarActive(false); // Close sidebar when component changes
  };

  return (
    <div className="main-content">
      <Navbar setActiveComponent={handleComponentChange} activeComponent={activeComponent} />
      <div className="content has-scrollbar">
        {renderComponent()}
      </div>
    </div>
  );
}

export default Home;
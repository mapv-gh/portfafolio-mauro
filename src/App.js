import styled, { ThemeProvider } from "styled-components";
import {darkTheme, lightTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import { AnimatePresence } from "framer-motion";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import ProjectDetails from "./components/Dialog/ProjectDetails";
import { useState } from "react";
import Button from '@mui/material/Fab';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background:  linear-gradient(180deg, rgba(255,255,255,0) 85%, rgba(10,78,139,0.47102591036414565) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;



function App() {
  const [isTheme, setisTheme] = useState(false)
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const themeB = isTheme ? lightTheme: darkTheme ;
  const Icon = isTheme ?  WbSunnyIcon: DarkModeIcon;
  const fabStyle = {
    position: 'fixed',
    bottom: 35,
    right: 35,
    color: themeB.text_primary,
    background: themeB.button
  };
  const fab = {
      sx: fabStyle,
    };
  const handleClick = () =>{
    setisTheme(!isTheme)
  }
  return (
    <ThemeProvider theme={themeB}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <AnimatePresence>
            <div>
              <Hero />
              <Wrapper>
                <Skills />
                <Experience />
              </Wrapper>
              <Projects openModal={openModal} setOpenModal={setOpenModal} />
              <Wrapper>
                <Education />
                <Contact />
                
              </Wrapper>
              
              <Footer />

              {openModal.state && (
                <ProjectDetails
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              )}
            </div>
            
          </AnimatePresence>
          <Button sx={fab.sx} size={fab.size}  onClick={handleClick}><Icon/></Button>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

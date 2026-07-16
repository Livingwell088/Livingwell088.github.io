// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import {Button, Container} from "react-bootstrap";
import Appbar from "./Components/Appbar.jsx";
import {Route, Router, Routes} from "react-router-dom";
import Home from "./Sections/Home.jsx";
import About from "./Sections/About.jsx";
import Projects from "./Sections/Projects.jsx";
import Skills from "./Sections/Skills.jsx";
import Experience from "./Sections/Experience.jsx";
import Contact from "./Sections/Contact.jsx";
import './Styles/fonts.css';
import Footer from "./Sections/Footer.jsx";

import lightning from "./assets/test-lightning.png"


function App() {
    // const [count, setCount] = useState(0)

    // return (
    //     <>
    //         <Appbar/>
    //         <Container className="text-center mt-5">
    //             <h1>My Portfolio</h1>
    //             <Button variant="primary">
    //                 Bootstrap Works!
    //             </Button>
    //         </Container>
    //     </>
    // )

    return (
        <>
            <Appbar />

            <div className="site-wrapper">

                <div className="lightning-side lightning-left"
                     style={{backgroundImage: `url(${lightning}`}} />

                <div className="lightning-side lightning-right"
                     style={{backgroundImage: `url(${lightning}`}} />
            </div>

            <main>
                <Home />
                <About />
                <Skills />
                <Projects />
                <Experience />
            </main>

            <Footer />

        </>
    );
}

export default App

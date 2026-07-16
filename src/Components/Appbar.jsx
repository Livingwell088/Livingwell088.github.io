import {Button, Col, Nav, Navbar, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import "../Styles/fonts.css"
import "../Styles/appbar.css"
import Home from "../Sections/Home.jsx";
import About from "../Sections/About.jsx";
import Skills from "../Sections/Skills.jsx";
import Projects from "../Sections/Projects.jsx";
import Experience from "../Sections/Experience.jsx";
import {useEffect, useRef, useState} from "react";


import logo from "../assets/Logo.png"


export default function Appbar() {

    const navbarRef = useRef();

    useEffect(() => {
        const navbar = navbarRef.current;

        const observer = new ResizeObserver(() => {

            document.documentElement.style.setProperty(
                "--navbar-height",
                `${navbar.offsetHeight}px`
            );

        });

        observer.observe(navbar);

        return () => observer.disconnect();

    }, []);

    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {

        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.5
            }
        );

        sections.forEach(section => observer.observe(section));
        return () => observer.disconnect();

    }, []);

    return (
        <>
            <Navbar id="navbar" className="teko" expand="md" ref={navbarRef}>
                <div className="container-fluid">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Brand id="logo">
                        <h3><img src={logo} style={{width: "75px", height: "75px"}} /> Nicholas Li</h3>
                    </Navbar.Brand>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav id="navLinks" className="navLinks align-items-center gap-4">

                                <Nav.Link href="#Home" active={activeSection === "Home"}> HOME </Nav.Link>
                                <Nav.Link href="#About" active={activeSection === "About"}> ABOUT </Nav.Link>
                                <Nav.Link href="#Skills" active={activeSection === "Skills"}> SKILLS </Nav.Link>
                                <Nav.Link href="#Projects" active={activeSection === "Projects"}> PROJECTS </Nav.Link>
                                <Nav.Link href="#Experience" active={activeSection === "Experience"}> EXPERIENCE </Nav.Link>
                                <Nav.Link href="#Footer" active={activeSection === "Footer"}> CONTACT </Nav.Link>

                            </Nav>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>

        </>
    )
}
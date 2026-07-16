import "../Styles/fonts.css"
import "../Styles/projects.css"
import "../Styles/glassCard.css"
import {Button, Card} from "react-bootstrap";

import mingHouse from "../assets/Ming House Website Thumbnail.png"
import hospital from "../assets/Hospital.jpg"
import resume from "../assets/Resume.jpg"
import staffing from "../assets/Staffing.jpg"
import github from "../assets/Github.jpg"
import portfolio from "../assets/Portfolio.jpg"
import misc from "../assets/Misc.jpg"
import loading from "../assets/Loading.jpg"
import {useRef} from "react";



export default function Projects() {

    const projectsRef = useRef();

    const scrollLeft = () => {
        projectsRef.current.scrollBy({
            behavior: "smooth",
            left: -404,
        });
    }

    const scrollRight = () => {
        projectsRef.current.scrollBy({
            behavior: "smooth",
            left: 404,
        });
    }

    return <>
        <section id="Projects" className="teko">

            <div className="projects-div">
                <h3 style={{
                    color: "var(--text-primary)"
                }}>Projects</h3>

                <div className="projects-wrapper">

                    <button className="scroll-left" onClick={scrollLeft}>
                        ←
                    </button>


                    <div className="projects-container" ref={projectsRef}>
                        <Card className="glass-card">
                            <div className="image-wrapper">
                                <Card.Img src={mingHouse} />
                            </div>

                            <Card.Title as="h4">Ming House Online Ordering Website</Card.Title>
                            <Card.Body>Full Stack restaurant online ordering platform with menu browsing, online ordering, hours and contacts, and admin management and analytics</Card.Body>
                            <Card.Footer>
                                <div className="grid-3" style={{
                                    display: "grid",
                                    gap: "18px",
                                    gridTemplateColumns: "1fr 1fr 1fr"
                                }}>
                                    <span className="skill-pill">React</span>
                                    <span className="skill-pill">Spring Boot</span>
                                    <span className="skill-pill">PostgreSQL</span>
                                </div>
                            </Card.Footer>
                        </Card>

                        <Card className="glass-card">
                            <div className="image-wrapper">
                                <Card.Img src={loading} />
                            </div>

                            <Card.Title as="h4">Ming House AI Assistant</Card.Title>
                            <Card.Body>Work In Progress. AI Assistant to help users with ordering, and answering customer question and potentially help take phone orders from customers.</Card.Body>
                            <Card.Footer>
                                <div className="grid-3" style={{
                                    display: "grid",
                                    gap: "18px",
                                    gridTemplateColumns: "1fr 1fr 1fr"
                                }}>
                                    {/*<span className="skill-pill">React</span>*/}
                                    {/*<span className="skill-pill">Spring Boot</span>*/}
                                    {/*<span className="skill-pill">PostgreSQL</span>*/}
                                </div>
                            </Card.Footer>
                        </Card>

                        <Card className="glass-card">
                            <div className="image-wrapper">
                                <Card.Img src={resume} />
                            </div>
                            <Card.Title as="h4">AI Job Description & Resume Matching Agent</Card.Title>
                            <Card.Body>AI powered tool that matches job descriptions and resumes</Card.Body>
                            <Card.Footer>
                                <div className="grid-3" style={{
                                    display: "grid",
                                    gap: "18px",
                                    gridTemplateColumns: "1fr 1fr 1fr"
                                }}>
                                    <span className="skill-pill">AI</span>
                                    <span className="skill-pill">Python</span>
                                    <span className="skill-pill">OpenAI</span>
                                </div>
                            </Card.Footer>
                        </Card>

                        <Card className="glass-card">
                            <div className="image-wrapper">
                                <Card.Img src={hospital} />
                            </div>
                            <Card.Title as="h4">Hospital Equipment Tracking and Servicing Application</Card.Title>
                            <Card.Body>Full Stack application to track hospital equipments, manage services and maintain order.</Card.Body>
                            <Card.Footer>
                                <div className="grid-3" style={{
                                    display: "grid",
                                    gap: "18px",
                                    gridTemplateColumns: "1fr 1fr 1fr"
                                }}>
                                    <span className="skill-pill">Java</span>
                                    <span className="skill-pill">SQL</span>
                                    <span className="skill-pill">MongoDB</span>
                                </div>
                            </Card.Footer>
                        </Card>

                        <Card className="glass-card">
                            <div className="image-wrapper">
                                <Card.Img src={staffing} />
                            </div>
                            <Card.Title as="h4">7Factor Staffing Tool Platform</Card.Title>
                            <Card.Body>Staffing tool to track billable hours, company revenue, and project resources. </Card.Body>
                            <Card.Footer>
                                <div className="grid-3" style={{
                                    display: "grid",
                                    gap: "18px",
                                    gridTemplateColumns: "1fr 1fr 1fr"
                                }}>
                                    <span className="skill-pill">React</span>
                                    <span className="skill-pill">MaterialUI</span>
                                    <span className="skill-pill">Responsive Design</span>
                                </div>
                            </Card.Footer>
                        </Card>

                        <Card className="glass-card">
                            <div className="image-wrapper">
                                <Card.Img src={github} />
                            </div>
                            <Card.Title as="h4">Github(by) Express</Card.Title>
                            <Card.Body>Fun university project meant to be a dating equivalent for Github users</Card.Body>
                            <Card.Footer>
                                <div className="grid-3" style={{
                                    display: "grid",
                                    gap: "18px",
                                    gridTemplateColumns: "1fr 1fr 1fr"
                                }}>
                                    <span className="skill-pill">Github</span>
                                    <span className="skill-pill">React</span>
                                    <span className="skill-pill">MongoDB</span>
                                </div>
                            </Card.Footer>
                        </Card>

                        <Card className="glass-card">
                            <div className="image-wrapper">
                                <Card.Img src={portfolio} />
                            </div>
                            <Card.Title as="h4">Personal Portfolio Website</Card.Title>
                            <Card.Body>You are here!</Card.Body>
                            <Card.Footer>
                                <div className="grid-3" style={{
                                    display: "grid",
                                    gap: "18px",
                                    gridTemplateColumns: "1fr 1fr 1fr"
                                }}>
                                    <span className="skill-pill">React</span>
                                    <span className="skill-pill">Bootstrap</span>
                                    <span className="skill-pill">HTML / CSS</span>
                                </div>
                            </Card.Footer>
                        </Card>

                        <Card className="glass-card">
                            <div className="image-wrapper">
                                <Card.Img src={misc} />
                            </div>
                            <Card.Title as="h4">Other University Projects / Courses</Card.Title>
                            <Card.Body>Some smaller projects, courses, and coding activities learned in undergraduate and graduate courses</Card.Body>
                            <Card.Footer>
                                <div className="grid-3" style={{
                                    display: "grid",
                                    gap: "18px",
                                    gridTemplateColumns: "1fr 1fr 1fr"
                                }}>
                                    <span className="skill-pill">Frontend</span>
                                    <span className="skill-pill">Backend</span>
                                    <span className="skill-pill">And More ...</span>
                                </div>
                            </Card.Footer>
                        </Card>

                    </div>




                    <button className="scroll-right" onClick={() => scrollRight()}>
                        ❯
                    </button>
                </div>
            </div>
        </section>
    </>
}
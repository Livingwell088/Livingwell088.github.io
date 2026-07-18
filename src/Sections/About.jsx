import "../Styles/fonts.css"
import "../Styles/about.css"
import "../Styles/glassCard.css"
import {Card} from "react-bootstrap";

import { PiPersonSimple } from "react-icons/pi";
import { TbSchool } from "react-icons/tb";
import { RiFocus2Line } from "react-icons/ri";
import { TbCodeCircle2 } from "react-icons/tb";
import { GoGoal } from "react-icons/go";


export default function About() {

    return <>
        <section id="About" className="teko">

            <div style={{ display: "flex", alignItems: "center" }}>

                {/* LEFT SIDE */}
                <div style={{
                    flex: 1,
                    flexDirection: "column",
                    display: "flex"
                }} id="about-left">

                    <h3 id="header"><PiPersonSimple />About Myself</h3>
                    <p id="description">
                        I'm Nicholas Li, a Computer Science graduate from Worcester Polytechnic Institute (WPI) with both Bachelor's and Master's degrees. I enjoy building full-stack applications that solve real-world problems and create great user experiences.
                        <br />
                        <br />
                        Previously, I worked as a Software Developer Co-op at Shaw Industries, where I helped modernize the company's ServiceNow portal in an Agile development environment. More recently, I designed and deployed a full-stack online ordering platform for Ming House, taking the project from concept to production.
                        <br />
                        <br />
                        Today, I'm focused on expanding my skills in AI and agentic software engineering, combining modern AI technologies with full-stack development to build intelligent, practical software solutions.
                    </p>



                </div>


                {/* RIGHT SIDE */}
                <div style={{
                    flex: 1,
                    flexDirection: "column",
                    display: "flex"
                }} id="about-right">

                    <div className="grid-2" style={{
                        display: "grid",
                        gap: "10px",
                        gridTemplateColumns: "1fr 1fr"
                    }}>
                        <Card className="glass-card">
                        <div className="vertical-line"></div>
                            <Card.Title>
                                <TbSchool />
                                Education
                            </Card.Title>

                            <Card.Body className="card-body">
                                B.S. Computer Science
                                <br />
                                M.S. Computer Science
                                <br />
                                Worcester Polytechnic Institute
                                <br />
                            </Card.Body>
                        </Card>

                        <Card className="glass-card">
                        <div className="vertical-line"></div>
                            <Card.Title>
                                <RiFocus2Line />
                                Focus
                            </Card.Title>

                            <Card.Body className="card-body">
                                Full Stack Development
                                <br />
                                AI Application
                            </Card.Body>
                        </Card>

                        <Card className="glass-card">
                        <div className="vertical-line"></div>
                            <Card.Title>
                                <TbCodeCircle2 />
                                Interests
                            </Card.Title>

                            <Card.Body className="card-body">
                                Development
                                <br />
                                AI
                                <br />
                                Board Games
                            </Card.Body>
                        </Card>

                        <Card className="glass-card">
                        <div className="vertical-line"></div>
                            <Card.Title>
                                <GoGoal />
                                Goals
                            </Card.Title>

                            <Card.Body className="card-body">
                                Learn New Things
                                <br />
                                Make An Impact
                                <br />
                                Develop Helpful Software
                            </Card.Body>
                        </Card>
                    </div>

                </div>


            </div>
        </section>
    </>
}
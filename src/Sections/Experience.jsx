import "../Styles/fonts.css"
import "../Styles/experience.css"
import "../Styles/glassCard.css"
import {Card} from "react-bootstrap";
import mingHouse from "../assets/Ming House Website Thumbnail.png";

import shaw from "../assets/Shaw.png";
import usps from "../assets/USPS.png";
import ming from "../assets/MingLogo.png";
import ai from "../assets/AI.png";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";


export default function Experience() {

    return <>
        <section id="Experience" className="teko">

            <div className="experience-div">
                <h3 style={{
                    color: "var(--text-primary)"
                }}>Experiences</h3>

                <div className="grid-4" style={{
                    display: "flex",
                    gap: "20px",
                    // display: "grid",
                    // gap: "18px",
                    // gridTemplateColumns: "1fr 1fr 1fr 1fr"
                }}>

                    <Card className="glass-card">
                        <Card.Title as="h4">
                            <img src={shaw} style={{
                                width: "50px",
                                height: "50px",
                                marginRight: "5px"
                            }}/>
                            Shaw Industries</Card.Title>
                        <Card.Subtitle>Software Developer Co-op</Card.Subtitle>
                        <Card.Body>

                            <div className="achievement">
                                Contributed to the Service Portal
                            </div>

                            <div className="achievement">
                                Developed catalog items used by hundreds of employees
                            </div>

                            <div className="achievement">
                                Automated workflows for item to minimize manual effort and increase organization
                            </div>

                            <div className="hover-text">
                                <div className="achievement">
                                    Collaborated with stakeholders in an Agile environment to define, develop, test and deliver features
                                </div>

                                <div className="achievement">
                                    Migrated production features and removed old functionality
                                </div>
                            </div>

                        </Card.Body>

                        <Card.Footer><p><GrMapLocation /> Remote</p></Card.Footer>

                    </Card>

                    <Card className="glass-card">
                        <Card.Title as="h4">
                            <img src={ming} style={{
                                width: "50px",
                                height: "50px",
                                marginRight: "5px"
                            }}/>
                            Ming House Restaurant</Card.Title>
                        <Card.Subtitle>Manager</Card.Subtitle>

                        <Card.Body>

                            <div className="achievement">
                                Developed and deployed a full-stack restaurant ordering platform (React, Spring Boot, SQL)

                            </div>

                            <div className="achievement">
                                Designed and maintained APIs and database systems for real-time menu and order management

                            </div>

                            <div className="achievement">
                                Keep content updated: online website, online ordering platform, menu, hours and more.
                                                            </div>

                            <div className="hover-text">
                                <div className="achievement">
                                    Monitor daily operations with a goal of keeping everything orderly.
                                                                    </div>

                                <div className="achievement">
                                    Resolve conflicts if and when they occur, both customer and employees.
                                </div>
                            </div>

                        </Card.Body>

                        <Card.Footer><p><MdOutlineLocationOn /> Worcester, MA</p></Card.Footer>
                    </Card>

                    <Card className="glass-card">
                        <Card.Title as="h4">
                            <img src={usps} style={{
                                width: "50px",
                                height: "50px",
                                marginRight: "5px"
                            }}/>
                            United States Postal Service</Card.Title>
                        <Card.Subtitle>City Carrier Assistant</Card.Subtitle>
                        <Card.Body>

                            <div className="achievement">
                                Deliver mail in a timely and efficient manner

                            </div>

                            <div className="achievement">
                                Practiced time management and accuracy

                            </div>

                            <div className="achievement">
                                Provided customer service
                            </div>

                        </Card.Body>
                        <Card.Footer><p><MdOutlineLocationOn /> Worcester, MA</p></Card.Footer>

                    </Card>

                    <Card className="glass-card">
                        <Card.Title as="h4">
                            <img src={ai} style={{
                                width: "50px",
                                height: "50px",
                                marginRight: "5px"
                            }}/>
                            Current Focus</Card.Title>
                        <Card.Subtitle>AI, Agentic & Software Engineering</Card.Subtitle>

                        <Card.Body>
                            <div className="achievement">
                                Actively preparing and searching for full-time Software Engineer position
                            </div>

                            <div className="achievement">
                                Learning AI and Agentic software engineering
                            </div>

                            <div className="achievement">
                                Exploring LLMS, LangChain, OpenAI, and other modern AI technologies
                            </div>


                            <div className="hover-text">
                                <div className="achievement">
                                    Developing, testing and deploying personal projects, both traditional and AI software projects.
                                </div>

                                <div className="achievement">
                                    Exploring and Learning new things.
                                </div>
                            </div>

                        </Card.Body>

                        <Card.Footer><p><AiOutlineLoading3Quarters /> In Progress</p></Card.Footer>

                    </Card>

                </div>

            </div>

        </section>
    </>
}

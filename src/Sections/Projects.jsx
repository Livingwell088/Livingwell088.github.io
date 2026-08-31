import "../Styles/fonts.css"
import "../Styles/projects.css"
import "../Styles/glassCard.css"
import {Button, Card, Modal} from "react-bootstrap";

import mingHouse from "../assets/Ming House Website Thumbnail.png"
import hospital from "../assets/Hospital.jpg"
import resume from "../assets/Resume.jpg"
import staffing from "../assets/Staffing.jpg"
import github from "../assets/Github.jpg"
import portfolio from "../assets/Portfolio.jpg"
import misc from "../assets/Misc.jpg"
import loading from "../assets/Loading.jpg"
import React, {useRef} from "react";
import hospitalFront from "../assets/hosFront.png"

import mingbotdemo from "../assets/MingBot Demo.png"
import mingbot from "../assets/MingBot.png"

export default function Projects() {

    const [selectedProject, setSelectedProject] = React.useState(null);

    const closeModal = () => {
        setSelectedProject(null);
    };

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


    const projects = [
        {
            title: "Ming Bot - Restaurant AI Retrieval Assistant",
            image: mingbotdemo,
            modalimg: mingbotdemo,
            description:
                "A retrieval-augmented generation (RAG) assistant that answers customer questions about restaurant menu, pricing, hours, and information.",
            technologies: [],
            details: (<>
                <p>Developed a FastAPI backend and vector database using ChromaDB and OpenAI embeddings to store, retrieve, and generate responses based on relevant retrieved context.</p>
                <p>Integrated a React chat user interface into the restaurant’s online website, enabling customers to interact with the assistant directly when browsing the website.</p>
                <p>Implemented conversation routing, follow-up checks and handling, and fallback logic for queries that may be ambiguous, out-of-scope or confusing.</p>
            </>),
            liveUrl: "https://ai-assistant-rho-eight.vercel.app/",
            githubUrl: "https://github.com/Livingwell088/AI-Assistant"
        },
        {
            title: "Ming House Online Ordering Website",
            image: mingHouse,
            modalimg: mingHouse,
            description: "Full Stack restaurant online ordering platform with menu browsing, online ordering, hours and contacts, and admin management and analytics",
            technologies: ["React", "Spring Boot", "PostgreSQL"],
            details: (
                <>
                    <p>Designed, built, and deployed a full stack restaurant ordering web application used by customers of Ming House Chinese Restaurant to browse menu, check restaurant information, and place orders online.</p>
                    <p>It includes a React frontend, Spring API, and cloud-hosted database with real-time menu and order management. As of now, it is fully deployed and supports full responsive design allowing customers to use it with all kinds of devices.</p>
                    <p>For next steps, I would also like to add AI aspects to the site for a better experience with features like AI Chatbox that may answer questions, recommendation based on past orders from the user and popular items, AI ordering, and more.</p>
                    <br />
                    <p>Built with React, Java, Spring, REST APIs, and SQL</p>

                </>

            ),
            liveUrl: "https://minghousema.com/",
            githubUrl: "https://github.com/Livingwell088/MingHouseWebsite"
        },

        {
            title: "AI Job Description & Resume Matching Agent",
            image: resume,
            modalimg: resume,
            description: "AI powered tool that matches job descriptions and resumes",
            technologies: ["AI", "Python", "OpenAI"],
            details: (<>
                <p>AI powered tool that matches an user's resume with a job description.</p>
                <p>User may input a url that the agent will extract a job description from or manually input the job description</p>
                <p>It will then evaluate the match based on the user's experience, skill, education and more.</p>
                <p>It will output the match in the form of percentages (100% being meeting or exceeding the job qualifications</p>
                <p>The agent will also list the strong matches, missing skills, resume recommendations and some interview questions </p>
            </>),
            liveUrl: "",
            githubUrl: "https://github.com/Livingwell088/Job-Description-Agent-Project"
        },
        {
            title: "Hospital Equipment Tracking and Servicing Application",
            image: hospital,
            modalimg: hospitalFront,
            description: "Full Stack application to track hospital equipments, manage services and maintain order.",
            technologies: ["Java", "SQL", "MongoDB"],
            details: (
                <>
                    <p>Application for Mass General Brigham Hospital</p>
                    <p>This medical service application was designed to assist medical professionals by making the process of service requests easier</p>
                    <p>It focuses on creating and carrying service requests such as food, medical deliveries, laundry and transportation services</p>

                    <br />
                    <p>Worked as the backend developer, implemented an embedded database in SQL as well as a server hosted database using MongoDB</p>
                    <p>Built backend objects, DAO's, and parsers code</p>
                    <p>Implemented a wrapper that can switch the database connection when needed (Example: If internet is down, the application and switch from the server to embedded and continue to work normally and not lose any data or progress</p>
                    <p>Integrated and connected frontend services with backend</p>
                    <p></p>
                </>
            ),
            liveUrl: "",
            githubUrl: "https://github.com/Livingwell088/Hospital-Servicing-Application"
        },
        {
            title: "7Factor Staffing Tool Platform",
            image: staffing,
            modalimg: staffing,
            description: "Staffing tool to track billable hours, company revenue, and project resources. ",
            technologies: ["React", "MaterialUI", "Responsive Design"],
            details: (
                <>
                    <p>7Factor Staffing Tool (now called 7Factor ProjectForce) is a web application for a company called 7Factor and is an ongoing project between 7Factor and WPI</p>
                    <p>It is a web application used internally to track employee hours to ensure reliability and efficiency, since as a consulting firm, project rates and resources can widely vary</p>
                    <p>My Senior capstone project at WPI where I worked on a team of 3 to add upon the previous team's work and prepare the next team after us</p>
                    <br />

                    <p>Our team's focus and goal was on extending the user interface functionality and aesthetics to all platforms including mobile, tablet and other non-traditional dimensions</p>
                    <p>I created user stories by conducting interviews with the founder and employee</p>
                    <p>Implemented responsive design, keep not only the design but all functionality so that it work just as well on mobile devices</p>
                </>
            ),
            liveUrl: "",
            githubUrl: "",
            reportURL: "/7Factor Report.pdf"
        },
        {
            title: "Github(by) Express",
            image: github,
            modalimg: github,
            description: "Fun university project meant to be a dating equivalent for Github users",
            technologies: ["Github", "React", "MongoDB"],
            details:(
                <>
                    <p>We created a dating / mingling application for Github users to meet and socialize with other</p>
                    <p>Designed and put together a nice user interface with features including login, profile creation and view, and matching section where you can find others</p>
                    <p>Implemented a noSQL database using MongoDB to store data of each user, their matches, and more</p>
                    <p>Integrated a authentication process by logging in using Github</p>
                    <p>Initially hosted to Heroku</p>
                </>
            ) ,
            liveUrl: "",
            githubUrl: ""
        },
        {
            title: "Personal Portfolio Website",
            image: portfolio,
            description: "You are here!",
            technologies: ["React", "Bootstrap", "HTML / CSS"],
            details: "Hello There!",
            liveUrl: "",
            githubUrl: "https://github.com/Livingwell088/Livingwell088.github.io"
        },
        {
            title: "Other University Projects  Courses",
            image: misc,
            description: "Some smaller projects, courses, and coding activities learned in undergraduate and graduate courses",
            technologies: ["Frontend", "Backend", "And More ..."],
            details: (
                <>
                    <p>Courses: Software Engineering, Webware, Object-Oriented Design Concepts, Algorithms, Database Systems, Computer Networks, Machine Learning, Artificial Intelligence, Computer Vision, Data Mining and more...</p>
                    <p>Some other projects: "Assessing opportunities for air pollution mitigation in Chelsea, MA", "One Breath Away: Reducing Rates and Severity of Pollution Induced Asthma in the Boston Area"</p>
                </>
            ),
            liveUrl: "https://digital.wpi.edu/catalog?f%5Bcreator_sim%5D%5B%5D=Li%2C+Nicholas&locale=en&sort=system_create_dtsi+asc",
            githubUrl: "https://github.com/Livingwell088"
        },

    ]


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

                        {projects.map((project) => (
                             <Card key={project.title} className="glass-card" onClick={() => setSelectedProject(project)}>
                                 <div className="vertical-line"></div>
                                <div
                                    className="image-wrapper"
                                >
                                    <Card.Img src={project.image} />
                                </div>

                                <Card.Title as="h4">{project.title}</Card.Title>
                                <Card.Body>{project.description}</Card.Body>
                                <Card.Footer>
                                    <div className="grid-3" style={{
                                        display: "grid",
                                        gap: "18px",
                                        gridTemplateColumns: "1fr 1fr 1fr"
                                    }}>
                                        {project.technologies.map(tech => (
                                            <span className="skill-pill" key={tech}>{tech}</span>
                                        ))}
                                    </div>
                                </Card.Footer>
                            </Card>

                        ))}

                    </div>

                    <Modal
                        show={selectedProject !== null}
                        onHide={closeModal}
                        centered
                        size="lg"
                        contentClassName="project-modal"
                        className="teko"
                    >
                        {selectedProject && (
                            <>
                                <Modal.Header closeButton>
                                    <Modal.Title>{selectedProject.title}</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <img
                                        src={selectedProject.image}
                                        alt={`${selectedProject.title} preview`}
                                        className="project-modal-image"
                                        style={{width:'100%'}}
                                    />

                                    <p className="project-modal-description">{selectedProject.details}</p>


                                </Modal.Body>

                                <Modal.Footer>
                                    {selectedProject.githubUrl && (
                                        <Button
                                            as="a"
                                            href={selectedProject.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="modal-secondary-button"
                                            onClick={(event) => {
                                                event.stopPropagation();
                                            }}
                                        >Github</Button>
                                    )}

                                    {selectedProject.liveUrl && (
                                        <Button
                                            as="a"
                                            href={selectedProject.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="modal-secondary-button"
                                            onClick={(event) => {
                                                event.stopPropagation();
                                            }}
                                        >Live Website</Button>
                                    )}

                                    {selectedProject.reportURL && (
                                        <Button
                                            as="a"
                                            href={selectedProject.reportURL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="modal-secondary-button"
                                            onClick={(event) => {
                                                event.stopPropagation();
                                            }}
                                        >See Report</Button>
                                    )}

                                    <Button
                                        variant="secondary"
                                        onClick={closeModal}
                                    >Close</Button>
                                </Modal.Footer>

                            </>
                        )}
                    </Modal>




                    <button className="scroll-right" onClick={() => scrollRight()}>
                        ❯
                    </button>
                </div>
            </div>
        </section>
    </>
}





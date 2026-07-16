import "../Styles/fonts.css"
import "../Styles/skills.css"
import "../Styles/footer.css"
import {Button} from "react-bootstrap";

import { ImGithub } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

import { HiArrowLongRight } from "react-icons/hi2";

import logo from "../assets/Logo.png";
import resume from "../../public/resume.pdf";


export default function Footer() {

    return <>
        <section id="Footer" className="teko">
            <div id="footer-div">
                <div style={{ display: "flex", alignItems: "center", margin: "65px" }}>

                    {/* LEFT SIDE */}
                    <div style={{
                        flex: 0.75,
                        flexDirection: "column",
                        display: "flex"
                    }} id="footer-left">

                        <h3><span>NL</span> Nicholas Li</h3>
                        <p>Software Engineer | Master’s and Bachelor's in Computer Science | Pursuing Entry-Level Software Engineer Position | Building and Exploring AI</p>

                        {/*<a*/}
                        {/*    className="footer-button"*/}
                        {/*    href="/resume.pdf"*/}
                        {/*    target="_blank"*/}
                        {/*    rel="noopener noreferrer"*/}
                        {/*>*/}
                        {/*    <span>VIEW RESUME</span>*/}
                        {/*    <HiArrowLongRight />*/}
                        {/*</a>*/}
                        <a className="footer-button"
                           href={resume}
                           target="_blank"
                           rel="noopener noreferrer"> VIEW RESUME <HiArrowLongRight style={{right: 0}} /></a>
                        {/*<a className="footer-button"*/}
                        {/*        onClick={() => window.open("mailto:Linicholas2019@gmail.com", "_blank")}>CONTACT ME <HiArrowLongRight /></a>*/}
                        <a
                            className="footer-button"
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=Linicholas2019@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>CONTACT ME</span>
                            <HiArrowLongRight />
                        </a>
                    </div>

                    {/* RIGHT SIDE */}
                    <div style={{
                        flex: 1.25,
                        flexDirection: "column",
                        display: "flex"
                    }} id="footer-right">

                        <h3 style={{margin: 0}}>Let's Connect</h3>
                        <p>I am always open to exploring new opportunities and hearing about interesting projects</p>

                        <p style={{margin: 0}}>Linicholas2019@gmail.com</p>
                        <p style={{margin: 0}}>Worcester, MA (Boston Area)</p>
                        <p>(401) 808-1902</p>

                        <div className="grid-3" style={{
                            display: "grid",
                            gap: "18px",
                            gridTemplateColumns: "1fr 1fr 1fr",
                            width: "65%"
                        }}>

                            <button className="connect-button" onClick={() => window.open("https://github.com/Livingwell088", "_blank")}><ImGithub /></button>
                            <button className="connect-button" onClick={() => window.open("https://www.linkedin.com/in/nicholas-li-781017193/", "_blank")}><BsLinkedin /></button>
                            <button className="connect-button"><TfiEmail /></button>
                        </div>

                    </div>
                </div>
            </div>

            <p>2026 Nicholas Li</p>
        </section>
    </>

}
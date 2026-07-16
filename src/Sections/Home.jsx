// import '../src/Styles/fonts.css';
import "../Styles/fonts.css"
import "../Styles/home.css"

import NickAI from "../assets/NickAI.png";


export default function Home() {

    return <>
        <section id="Home" className="teko">

            <div style={{ display: "flex", alignItems: "center" }}>

            {/* LEFT SIDE */}
                <div style={{
                    flex: 1.2,
                    flexDirection: "column",
                    display: "flex"
                }} id="home-left">

                    <p id="hello">
                        HELLO, I'm
                    </p>
                    <h2 id="name">
                        Nicholas Li
                    </h2>
                    <h4 id="subtitle">
                        Software Engineer <br />
                        JAVA • AI • SQL • FULL STACK
                    </h4>

                    <p id="description">
                        I'm Nicholas Li, a Computer Science graduate from Worcester Polytechnic Institute (WPI) with both Bachelor's and Master's degrees. I enjoy building full-stack applications that solve real-world problems and create great user experiences.
                        <br />
                        Previously, I worked as a Software Developer Co-op at Shaw Industries, where I helped modernize the company's ServiceNow portal in an Agile development environment. More recently, I designed and deployed a full-stack online ordering platform for Ming House, taking the project from concept to production.
                        <br />
                        Today, I'm focused on expanding my skills in AI and agentic software engineering, combining modern AI technologies with full-stack development to build intelligent, practical software solutions.
                    </p>



                </div>


            {/* RIGHT SIDE */}
                <div style={{
                    flex: 0.8,
                    flexDirection: "column",
                    display: "flex"
                }}>

                    <img
                        src={NickAI}
                        style={{
                            width: "100%",
                            objectFit: "cover"
                        }}
                        />

                    <p className="ai-tag">Stylized AI illustration created from my photo.</p>

                </div>


            </div>

        </section>
    </>
}
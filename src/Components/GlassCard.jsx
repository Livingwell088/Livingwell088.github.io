
import "../Styles/fonts.css"
import "../Styles/glassCard.css"
import {Card} from "react-bootstrap";
import {TbSchool} from "react-icons/tb";


export default function GlassCard() {

    return <>
        <Card className="about-card glass-card">
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
    </>


}
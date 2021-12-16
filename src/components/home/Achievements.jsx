import React from 'react';
import GenericCard from "./GenericCard";
import {
    Container,
    Row,
    Jumbotron
} from "react-bootstrap";

const Achievements = ({achievements}) => {
    return (  
        <section className="section" id="achievements">
            <Container>
                <Jumbotron fluid className="bg-white">
                    <h2 className="display-4 mb-5 text-center">
                        {achievements.heading}
                    </h2>
                    <Row>
                        {
                            achievements.data.map(data => {
                                return <GenericCard heading={achievements.heading} key={data.company} data={data} />
                            })
                        }
                    </Row>
                </Jumbotron>
            </Container>
        </section>
    );
}
 
export default Achievements;
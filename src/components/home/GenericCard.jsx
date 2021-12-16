import React from 'react';

import { 
    Col,
    Card
 } from "react-bootstrap";
const GenericCard = ({heading, key, data}) => {
    return ( 
        <Col lg={heading === 'Experiences' ? '6' : '4'}>
            <div className="pb-5 text-center">
                <img className=" bg-white mb-3" src={data.companylogo} alt=""/>
                <p className="lead">
                    {data.role}
                    <br/>
                    {data.date}
                    {
                     data.link && <a href={data.link}  rel="noopener noreferrer" target="_blank">Verify</a>
                    }
                </p>
                
            </div>
        </Col>
     );
}
 
export default GenericCard;
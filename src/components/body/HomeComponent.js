import React from 'react';

import BodyContainer from './BodyContainer';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';

export default function HomeComponent(){
    return (
        <BodyContainer>
            <div className="home-container">
                <div className="home-content">
                    <div className="profile-content">
                        <div className="profile-text">
                            <h1>Hello, I'm Sungmin.</h1>
                            <p>I'm full-stack developer based in Pasadena, CA</p>
                        </div>
                        <div className="profile-img"/>
                    </div>
                    <div className="stack-content"></div>

                </div>
            </div>
        </BodyContainer>
    );
}
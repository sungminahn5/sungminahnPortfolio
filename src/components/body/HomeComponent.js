import React from 'react';

import BodyContainer from './BodyContainer';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import HomeSkillStack from './HomeSkillStack';

export default function HomeComponent(){
    return (
        <BodyContainer>
            <div className="home-container">
                <div className="home-content">
                    <div className="profile-content">
                        <div className="profile-text">
                            <h1>Hello, I'm Sungmin. 👋</h1>
                            <p>I'm 👨‍💻full-stack developer based out in 📍Pasadena, CA</p>
                        </div>
                        <div className="profile-img"/>
                    </div>
                    <HomeSkillStack/>
                </div>
            </div>
        </BodyContainer>
    );
}
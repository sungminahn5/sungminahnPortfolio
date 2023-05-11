import React, {useState, useMemo} from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SkillCard from '../SkillCard';
import Stack from 'react-bootstrap/Stack';

export default function AboutExperienceTimeline(){
  const workIconStyle = {background: "#06D6A0"};
  const schoolIconStyle = {background: "#f9c74f"};
  const [experiences, setExperiences] = useState([
    
  ]);

  useMemo(() =>{
    fetch('http://localhost:8080/api/experiences').then( res => {
      if(res.ok) {
        return res.json();
      }
    }).then( jsonRes => setExperiences(jsonRes.experiences));
  } , []);

  return (
    <VerticalTimeline>
      {experiences.map(element => {
        const isWorkIcon = element.category === "WORK";
        const containsTechStack = element.techStack.length > 0;
        return (
          <VerticalTimelineElement
            key={element.key}
            className="vertical-timeline-element--work"
            date={element.date}
            iconStyle={
              isWorkIcon ? workIconStyle: schoolIconStyle
            }
            icon={
              isWorkIcon ?
                <img alt="work_img" style={{width: '25px', alignContent: 'middle' }} src="/assets/img/work.svg"/>:
                <img alt="school_img" style={{width: '30px', alignContent: 'middle'}} src="/assets/img/school.svg"/> }
          >
            <h5 className="vertical-timeline-title">{element.company}</h5>
            <h7 className="vertical-timeline-subtitle">{element.title}</h7>
            <p id="description">{element.description}</p>
            {containsTechStack && 
              <Stack direction="horizontal" gap={2} style={{marginTop: '10px'}}>{
                element.techStack.map(tech => 
                  <SkillCard 
                    skill={tech} 
                    isPreview={true}
                  />
                )}
              </Stack>
            }
          </VerticalTimelineElement>
        );
      }
      )}
    </VerticalTimeline>
  );
}
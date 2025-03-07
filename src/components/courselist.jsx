import React from "react";
import '../components.css'

const CourseList = ({courses}) => (
    <div className="courses-container">
        { Object.entries(courses).map(([key, entry]) => 
        <div className="courses-card" key={key}>
            <div className="code-name">
                <h2 className='courses-code'>{entry[1].term} CS {entry[1].number}</h2>
                <h3 className='courses-text'>{entry[1].title}</h3>
            </div>
            <div className="hr-meets">
                <hr></hr>
                <h3 className='courses-text'>{entry[1].meets}</h3>
            </div>
        </div>)}
    </div>
);

export default CourseList;
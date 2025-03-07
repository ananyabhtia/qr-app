import React from "react";
import '../components.css'

const CourseList = ({courses}) => (
    <div className="courses-list">
        { Object.entries(courses).map(([key, entry]) => 
        <div className="courses-container">
            <div className="code-name">
                <h2 key={key} className='courses-code'>{entry.term} CS {entry.number}</h2>
                <h3 key={key} className='courses-text'>{entry.title}</h3>
            </div>
            <div className="hr-meets">
                <hr></hr>
                <h3 key={key} className='courses-text'>{entry.meets}</h3>
            </div>
        </div>)}
    </div>
);

export default CourseList;
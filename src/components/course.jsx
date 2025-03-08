import React from "react";
import '../components.css'

const Course = ({id, course, selected, toggleSelected}) => (
    <div className={`courses-card ${selected[course[1].term].includes(course) ? 'selected' : ''}`} onClick={ () => toggleSelected(course) }>
        <div className="code-name">
            <h2 className='courses-code'>{course[1].term} CS {course[1].number}</h2>
            <h3 className='courses-text'>{course[1].title}</h3>
        </div>
        <div className="hr-meets">
            <hr className={selected[course[1].term].includes(course) ? 'hr-selected' : ''}></hr>
            <h3 className='courses-text'>{course[1].meets}</h3>
        </div>
    </div>
);

export default Course;

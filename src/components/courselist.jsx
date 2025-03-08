import React from "react";
import '../components.css'
import Course from "./course";

const CourseList = ({courses, selected, toggleSelected}) => (
    <div className="courses-container">
        { Object.entries(courses).map(([key, entry]) => (
            <Course key={key} id={key} course={entry} selected={selected} toggleSelected={toggleSelected} />
        ))}
    </div>
);

export default CourseList;
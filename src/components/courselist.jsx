import React from "react";

const CourseList = ({courses}) => (
    <div>
        { Object.entries(courses).map(([key, entry]) => <h2 key={key}>{entry.term} CS {entry.number}: {entry.title}</h2>)}
    </div>
);

export default CourseList;
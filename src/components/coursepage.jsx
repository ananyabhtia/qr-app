import React from "react";
import { useState } from "react";
import CourseList from "./courselist";

const CoursePage = ({courses}) => {
    const [selected, setSelected] = useState({Fall: [], Winter: [], Spring: []});

    const toggleSelected = (course) => setSelected(
        selected[course[1].term].includes(course) // if course is selected
        ? {...selected, [course[1].term]: selected[course[1].term].filter(x => x !== course)} // if selected, make a new list with all items except course
        : {...selected, [course[1].term]: [...selected[course[1].term], course]} // else make new array with old selected and new selected course
    );

    console.log('Selected:', selected);

    return (
        <CourseList courses={courses} selected={selected} toggleSelected={toggleSelected} />
    );
}

export default CoursePage;
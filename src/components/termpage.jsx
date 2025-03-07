import { useState } from 'react';
import CourseList from './courselist';

const terms = {
    Fall: 'Fall term courses...',
    Winter: 'Winter term courses...',
    Spring: 'Spring term courses...'
};

const TermButton = ({term, selection, setSelection}) => (
    <div>
        <input type='radio' id={term} className='btn-check' checked={term === selection} autoComplete='off' onChange={ () => setSelection(term) } />
        <label className='btn btn-success mb-1 p-2' htmlFor={term}>
            {term}
        </label>
    </div>
);

const TermSelector = ({selection, setSelection}) => (
    <div className='btn-group'>
        { Object.keys(terms).map(term => <TermButton key={term} term={term} selection={selection} setSelection={setSelection} />)}
    </div>
);

const TermPage = ({courses}) => {
    const [selection, setSelection] = useState('Fall');

    const filteredCourses = Object.entries(courses).filter(([key, course]) => course.term === selection);
    
    return (
        <div>
            <TermSelector selection={selection} setSelection={setSelection} />
            <CourseList courses={filteredCourses} />
        </div>
    );
};

export default TermPage;


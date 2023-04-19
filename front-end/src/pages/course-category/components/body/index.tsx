import { useContext } from 'react';

import CourseBox from '../../../../components/course-box';
import CategoryContext from '../../../../contexts/categoryContext';

const CourseBody = () => {
    const categoryContext = useContext(CategoryContext);

    return (
        <div className="newest-courses__content container-fluid">
            <div className="row mt-3 ">

                {categoryContext.coursesToShow.map((coursesObj, index) => (
                    <div className="newest-course__wrapper col-12 col-lg-6 col-xl-4" key={index}>
                        <CourseBox courseObj={coursesObj} />
                    </div>
                ))}

            </div>
        </div>
    );
};

export default CourseBody;

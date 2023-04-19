import { useContext } from 'react';
import { BsEye } from 'react-icons/bs';
import { FaRegComments, FaUserGraduate } from 'react-icons/fa';

import CourseContext from '../../../../../contexts/courseContext';

const CourseSummery = () => {
    const courseContext = useContext(CourseContext);
    const courseObj = courseContext.courseObj;

    // views data has not driven from data-base!
    const courseViews = createFakeView();

    return (
        <div className="course-details__side-bar__box">
            <div className="course-details__corse-preview">
                <div className="d-flex justify-content-center align-items-center pb-2">
                    <div className="course-details__corse-preview__students">
                        <span className="course-details__corse-preview__students__icon">
                            <FaUserGraduate size="1.8rem" />
                        </span>
                        <span className="px-2">
                            تعداد دانشجو:
                        </span>
                        <span className="course-details__corse-preview__students__badge">
                            {courseObj && courseObj.courseStudentsCount}
                        </span>
                    </div>

                </div>

                <div className="d-flex align-items-center justify-content-around mt-3">
                    <div className="course-details__corse-preview__comments d-flex align-items-center">
                        <FaRegComments size="1.6rem" />
                        <span className="course-details__corse-preview__comments__counts mx-2">
                            {courseObj && courseObj.comments.length} دیدگاه
                        </span>
                    </div>
                    <div className="course-details__corse-preview__separator"></div>
                    <div className="course-details__corse-preview__views d-flex">
                        <BsEye size="1.6rem" />
                        <span className="course-details__corse-preview__comments__counts mx-2">
                            {courseViews.toLocaleString()} بازدید
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const createFakeView = () => {
    return Math.ceil(Math.random() * 100000);
};

export default CourseSummery;

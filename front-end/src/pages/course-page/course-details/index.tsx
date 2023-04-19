import CourseDetailLeftSide from './left-side';
import CourseDetailRightSide from './right-side';

const CourseDetails = () => {
    return (
        <div className="course-details__container my-5">
            <div className="course-details__wrapper row">
                <div className="course-details__right col-12 col-xl-8 px-2">
                    <CourseDetailRightSide />
                </div>
                <div className="course-details__left col-12 col-xl-4 px-2">
                    <CourseDetailLeftSide />
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;

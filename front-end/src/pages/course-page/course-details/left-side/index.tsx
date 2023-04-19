import "./index.css";
import RegisterSection from './register-section';
import CourseSummery from './course-summery';
import ShortLink from './short-link';
import RelatedCourses from "../../../../components/related-courses";

const CourseDetailLeftSide = () => {
    return (
        <div className="course-details__side-bar">
            <RegisterSection />
            <CourseSummery />
            <ShortLink />
            <RelatedCourses />
        </div>
    );
};

export default CourseDetailLeftSide;

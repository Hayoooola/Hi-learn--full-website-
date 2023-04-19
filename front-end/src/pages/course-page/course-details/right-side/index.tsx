import CourseInfo from "./course-info";
import CourseContent from "./course-content";
import CourseVideos from "./course-videos";
import TeacherInfo from "./teacher-info";
import Comments from "./comments";

const CourseDetailRightSide = () => {
    return (
        <div>
            <CourseInfo />
            <CourseContent />
            <CourseVideos />
            <TeacherInfo />
            <Comments />
        </div>
    );
};

export default CourseDetailRightSide;

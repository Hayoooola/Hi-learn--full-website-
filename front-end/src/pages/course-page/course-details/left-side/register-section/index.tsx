import { useContext } from "react";
import { MdSchool } from "react-icons/md";
import CourseContext from "../../../../../contexts/courseContext";

const RegisterSection = () => {
    const courseContext = useContext(CourseContext);
    const courseObj = courseContext.courseObj;

    return (
        <div className="course-details__side-bar__box">
            <div className="course-details__subscription d-flex justify-content-center align-items-center">
                <MdSchool size="2.2rem" />
                <span className="course-details__subscription__text px-2">

                    {courseObj && courseObj.isUserRegisteredToThisCourse ?
                        "دانشجوی دوره هستید" :
                        "ثبت نام در دوره"}

                </span>
            </div>
        </div>
    );
};

export default RegisterSection;

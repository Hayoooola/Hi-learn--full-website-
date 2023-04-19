import { FaChalkboardTeacher } from "react-icons/fa";

import "./index.css";
import { useContext } from "react";
import CourseContext from "../../../../../contexts/courseContext";

const image = require("../../../../../assets/images/logo/hi-learn-main.png");

const TeacherInfo = () => {
    const courseContext = useContext(CourseContext);

    const teacher = courseContext.courseObj?.creator.name;
    const skill = `${capitalizeFirstLetter(courseContext.courseObj?.categoryID.name || "")} Developer`;

    return (
        <div className="teacher-info__container d-flex justify-content-between align-items-center mx-2 my-5">
            <div className="d-flex">
                <img src={image} alt="teacher" className="teacher-info__teacher-image" />
                <div className="teacher-info__content">
                    <span className="teacher-info__title">
                        {teacher}
                    </span>
                    <span className="teacher-info__subtitle">
                        {skill}
                    </span>
                </div>
            </div>
            <div className="teacher-info__badge d-flex">
                <span className="teacher-info__icon mx-2"><FaChalkboardTeacher size="1.5rem" /></span>
                <span >مدرس</span>
            </div>
        </div>
    );
};

const capitalizeFirstLetter = (word: string) => (
    word.charAt(0).toUpperCase() + word.slice(1)
);

export default TeacherInfo;

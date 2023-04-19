import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./index.css";
import { useContext } from "react";
import CourseContext from "../../../contexts/courseContext";

const CourseExplanation = () => {
    const courseContext = useContext(CourseContext);
    const courseObj = courseContext.courseObj;

    return (
        <div className="course-explanation__container row justify-content-between mx-3">
            <div className="course-explanation__right col-12 col-xl-6 my-3">
                <div className="course-explanation__category-badge__wrapper my-3">
                    <Link to={`/courses/${courseObj?.categoryID.name}`}><span className="course-explanation__category-badge">
                        {courseObj && courseObj.categoryID.title}
                    </span></Link>
                </div>
                <div className="course-explanation__title mt-2 mb-3">
                    {courseObj && courseObj.name}
                </div>
                <div className="course-explanation__content mb-3">
                    {courseObj && courseObj.description}
                </div>
                <div className="course-explanation__social-links d-flex justify-content-center">
                    <a href="#" className="course-explanation__social-link"><FaFacebook size="1.5rem" /></a>
                    <a href="#" className="course-explanation__social-link"><FaTwitter size="1.5rem" /></a>
                    <a href="#" className="course-explanation__social-link"><FaTelegram size="1.5rem" /></a>
                </div>
            </div>

            <div className="course-explanation__left col-12 col-xl-6 my-3">
                <div className="course-explanation__video__wrapper">
                    <video src="https://www.aria-villa.com/wp-content/uploads/2023/04/Video%20Compressor%20_%20Reduce%20Video%20File%20Size%20Online.mp4" poster={courseObj && require(`../../../assets/images/courses/${courseObj.cover}`)} controls className="w-100"></video>
                </div>
            </div>
        </div>
    );
};

export default CourseExplanation;

import { useContext } from "react";
import { MdSchool } from "react-icons/md";

import "./index.css";
import CourseContext from "../../../../../contexts/courseContext";
import { addToCart } from "../../../../../features/cartState";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const RegisterSection = () => {
    const courseContext = useContext(CourseContext);
    const courseObj = courseContext.courseObj;

    const dispatch = useDispatch();

    const addToCartHandler = () => {
        courseObj && courseObj.isUserRegisteredToThisCourse ?
            toast.warning("شما قبلا این دوره را خریداری کرده اید!") :
            dispatch(addToCart(courseObj?.shortName));
    };

    return (
        <div className="course-details__side-bar__box">
            <div className="course-details__subscription d-flex justify-content-center align-items-center"
                onClick={addToCartHandler}>
                <MdSchool size="2.2rem" />
                <div className="course-details__subscription__text px-2">

                    {courseObj && courseObj.isUserRegisteredToThisCourse ?
                        <span> دانشجوی دوره هستید</span> :
                        <span > ثبت نام در دوره</span>}

                </div>
            </div>
        </div>
    );
};

export default RegisterSection;

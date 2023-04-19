import { FC } from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { CgArrowLeft } from 'react-icons/cg';

import "./index.css";
import ICourseData from '../../interfaces/course-data';

interface IProps {
    courseObj: ICourseData;
}


const CourseBox: FC<IProps> = ({ courseObj }) => {
    const image = require(`../../assets/images/courses/${courseObj.cover}`);

    return (
        <div className="mb-5">
            <div className="course-box__wrapper mx-2">
                <img src={image} alt="" className="course-box__image" />
                <div className="course-box__title my-3 text-center">
                    <Link to={`/course/${courseObj.shortName}`} className='course-box__title'>
                        <span className='course-box__button__title mx-1'>{courseObj.name}</span>
                    </Link>
                </div>
                <div className="course-box__info d-flex justify-content-between m-2">

                    <div className="course-box__teacher-box d-flex">
                        <FaChalkboardTeacher />
                        <div className="course-box__teacher mx-2">{courseObj.creator.toString()}</div>
                    </div>
                    <div className="course-box__rating">
                        <Rating value={courseObj.courseAverageScore || 4} readOnly />
                    </div>

                </div>

                <div className='course-box__price-box d-flex justify-content-between m-2 py-3'>
                    <div className="course-box__students-wrapper d-flex">
                        <IoIosPeople size="1.2rem" />
                        <div className="course-box__students mx-2">{courseObj.registers}</div>
                    </div>
                    <div className="course-box__price">
                        {courseObj.price ? courseObj.price.toLocaleString() : "رایگان"}
                    </div>
                </div>

                <div className="course-box__button__wrapper d-flex justify-content-center py-2">
                    <div className="d-flex">
                        <Link to={`/course/${courseObj.shortName}`}>
                            <span className='course-box__button__title mx-1'>مشاهده اطلاعات</span>
                        </Link>
                        <CgArrowLeft size="1.2rem" />
                    </div>
                </div>

            </div >
        </div >
    );
};

export default CourseBox;

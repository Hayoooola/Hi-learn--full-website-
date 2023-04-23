import { useContext } from "react";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

import "./index.css";
import PanelContext from "../../../../contexts/panelContext";
import Btn2 from "../../../../components/buttons/btn-2";


const UserCourses = () => {
    const panelContext = useContext(PanelContext);
    const coursesArray = panelContext.userObj?.courses;

    return (
        <div className="panel-courses mt-3">
            <div className="panel-courses__title">
                <span>دوره های خریداری شده:</span>
            </div>

            {coursesArray?.length === 0 ?

                (<div>
                    <p className="panel-courses__no-item">درحال حاضر دوره ای برای نمایش وجود ندارد! برای سفارش دوره جدید به صفحه فروشگاه مراجعه فرمایید.</p>
                    <Btn2 title="مشاهده فروشگاه" link="/courses/all" />
                </div>) :

                (coursesArray?.map((courseObj, index) => (
                    <div className="panel-courses__course-box" key={index}>
                        <div className="row">
                            <div className="col-5">
                                <div className="panel-courses__image">
                                    <img src={courseObj.cover && require(`../../../../assets/images/courses/${courseObj.cover}`)} alt={courseObj.name} />
                                </div>
                            </div>
                            <div className="col-7 panel-course__body">
                                <div className="panel-course__detail">
                                    <span className="panel-courses__course-title">{courseObj.name}</span>
                                    <Rating value={courseObj.courseAverageScore || 4.5} precision={0.5} readOnly dir="ltr" />
                                </div>
                                <div className="panel-course__link">
                                    <Link to={`/course/${courseObj.shortName}`} >مشاهده جلسات دوره</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )))
            }

        </div>
    );
};

export default UserCourses;

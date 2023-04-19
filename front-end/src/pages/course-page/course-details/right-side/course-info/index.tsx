import { useContext, useEffect, useState } from "react";
import moment from "jalali-moment";
import { BiSupport } from "react-icons/bi";
import { BsCalendarDateFill, BsFillClockFill, BsFillPlayCircleFill, BsInfoCircleFill } from "react-icons/bs";
import { MdSchool } from "react-icons/md";

import "./index.css";
import CourseContext from "../../../../../contexts/courseContext";
import { ISessions } from "../../../../../interfaces/course-data";

const CourseInfo = () => {
    const courseContext = useContext(CourseContext);
    const courseObj = courseContext.courseObj;

    const [status, setStatus] = useState("");
    const [time, setTime] = useState("");
    const [updateDate, setUpdatedDate] = useState("");
    const [support, setSupport] = useState("");
    const [preNeeds, setPreNeeds] = useState("");
    const [access, setAccess] = useState("");

    useEffect(() => {
        if (courseObj) {
            setSupport(courseObj.support);
            setStatus(checkCourseStatus(courseObj.status));
            setUpdatedDate(moment(courseObj.updatedAt.slice(0, 10)).locale("fa").format('DD/ MM/ YYYY'));
            setTime(courseObj.sessions.length > 0 ? findCourseTotalTime(courseObj.sessions) : "تعیین نشده");
            setAccess("آنلاین");
            setPreNeeds("HTML, CSS");
        }
    }, [courseObj]);

    return (
        <div className="course-details__course-info">
            <div className="row">
                <div className="col-6 col-lg-4 course-details__course-info__wrapper mb-3" >
                    <div className="course-details__course-info__box d-flex align-items-center mx-2">
                        <MdSchool size="3.2rem" />
                        <div className="course-details__course-info__content px-2">
                            <span className="course-details__course-info__title">
                                وضعیت دوره:
                            </span>
                            <span className="course-details__course-info__subtitle">
                                {status}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-4 course-details__course-info__wrapper mb-3" >
                    <div className="course-details__course-info__box d-flex align-items-center mx-2">
                        <BsFillClockFill size="2.5rem" />
                        <div className="course-details__course-info__content px-2">
                            <span className="course-details__course-info__title ">
                                مدت زمان دوره:
                            </span>
                            <span className="course-details__course-info__subtitle course-total-time">
                                {time}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-4 course-details__course-info__wrapper mb-3" >
                    <div className="course-details__course-info__box d-flex align-items-center mx-2">
                        <BsCalendarDateFill size="2.5rem" />
                        <div className="course-details__course-info__content px-2">
                            <span className="course-details__course-info__title">
                                آخرین بروزرسانی:
                            </span>
                            <span className="course-details__course-info__subtitle">
                                {updateDate}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-lg-4 course-details__course-info__wrapper mb-3" >
                    <div className="course-details__course-info__box d-flex align-items-center mx-2">
                        <BiSupport size="3rem" />
                        <div className="course-details__course-info__content px-2">
                            <span className="course-details__course-info__title">
                                روش پشتیبانی
                            </span>
                            <span className="course-details__course-info__subtitle">
                                {support}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-4 course-details__course-info__wrapper mb-3" >
                    <div className="course-details__course-info__box d-flex align-items-center mx-2">
                        <BsInfoCircleFill size="2.5rem" />
                        <div className="course-details__course-info__content px-2">
                            <span className="course-details__course-info__title">
                                پیش نیاز:
                            </span>
                            <span className="course-details__course-info__subtitle">
                                {preNeeds}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-lg-4 course-details__course-info__wrapper mb-3" >
                    <div className="course-details__course-info__box d-flex align-items-center mx-2">
                        <BsFillPlayCircleFill size="2.5rem" />
                        <div className="course-details__course-info__content px-2">
                            <span className="course-details__course-info__title">
                                نوع مشاهده:
                            </span>
                            <span className="course-details__course-info__subtitle">
                                {access}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const checkCourseStatus = (status: string) => {
    switch (status) {
        case "start":
            return "درحال برگزاری";
        case "presale":
            return "پیش ثبت نام";
        default:
            return "به اتمام رسیده";
    }
};

const findCourseTotalTime = (sessions: ISessions[]) => {
    const timesArray = sessions.map(session => session.time);

    const secondsArray = timesArray.map(time => +time.slice(3, 5));
    const minutesArray = timesArray.map(time => +time.slice(0, 2));

    const sumSeconds = secondsArray.reduce((a, b) => a + b);
    const sumMinutes = Math.floor(minutesArray.reduce((a, b) => a + b)) + Math.floor(sumSeconds / 60);

    let finalSecond = (sumSeconds % 60).toString();
    let finalMinute = (sumMinutes % 60).toString();
    let finalHour = Math.floor(sumMinutes / 60).toString();

    finalSecond = finalSecond.length === 1 ? `0${finalSecond}` : finalSecond;
    finalMinute = finalMinute.length === 1 ? `0${finalMinute}` : finalMinute;
    finalHour = finalHour.length === 1 ? `0${finalHour}` : finalHour;

    return `${finalHour} :${finalMinute} :${finalSecond}`;
};

export default CourseInfo;

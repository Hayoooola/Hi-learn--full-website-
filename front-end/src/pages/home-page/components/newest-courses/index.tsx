import { useEffect, useState } from "react";

import "./index.css";
import CourseTitle from "../../../../components/courses-title";
import Btn1 from "../../../../components/buttons/btn-1";
import CourseBox from '../../../../components/course-box';
import { useFetchAllCoursesQuery } from "../../../../API/coursesApi";
import ICourseData from "../../../../interfaces/course-data";

const NewestCourses = () => {
    const { data } = useFetchAllCoursesQuery(null);

    const [coursesArray, setCoursesArray] = useState<ICourseData[] | []>([]);

    useEffect(() => {
        // pick the latest 6 courses
        data &&
            setCoursesArray(data.length > 6 ? data.slice(data.length - 6, data.length) : data);

    }, [data]);

    return (
        <div className='container my-5'>
            <div className="newest-courses__wrapper pt-5">
                <div className="newest-courses__header d-flex justify-content-between">
                    <CourseTitle title="جدیدترین دوره ها" subtitle="سکوی پرتاب شما به سمت موفقیت" />
                    <Btn1 title="تمامی دوره ها" link="/courses/all" />
                </div>

                <div className="newest-courses__content">
                    <div className="row mt-3">
                        {coursesArray.map((courseObj: ICourseData, index) => (
                            <div className="newest-course__wrapper col-12 col-lg-6 col-xl-4" key={index}>
                                <CourseBox courseObj={courseObj} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewestCourses;

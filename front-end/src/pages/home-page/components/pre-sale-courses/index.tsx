import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import "swiper/css";

import "./index.css";
import CourseTitle from "../../../../components/courses-title";
import CourseBox from "../../../../components/course-box";
import { useFetchPreSellCoursesQuery } from '../../../../API/coursesApi';
import ICourseData from '../../../../interfaces/course-data';

const PreSaleCourses = () => {
    const { data } = useFetchPreSellCoursesQuery();

    const [courseArray, setCourseArray] = useState<ICourseData[] | []>([]);

    useEffect(() => {
        // pick the latest 6 courses
        data &&
            setCourseArray(data.length > 6 ? data.slice(data.length - 6, data.length) : data);

    }, [data]);

    return (
        <div className="favorite-courses__wrapper container pt-5">
            <div className="favorite-courses__title mb-5">
                <CourseTitle title="دوره های درحال برگزاری" subtitle="ثبل از همه ثبت نام کنید!" />
            </div>

            <div className="favorite-courses__content">
                <Swiper
                    slidesPerView={3}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: true,
                    }}
                    speed={1000}
                    breakpoints={{
                        576: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1200: { slidesPerView: 3 }
                    }}
                    modules={[Autoplay]}
                >
                    {courseArray.map((courseObj, index) => (
                        <SwiperSlide key={index}>
                            <CourseBox courseObj={courseObj} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default PreSaleCourses;

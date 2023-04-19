import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";

import "swiper/css";
import "./index.css";
import CourseTitle from "../../../../components/courses-title";
import CourseBox from "../../../../components/course-box";
import { useFetchFavoriteCoursesQuery } from '../../../../API/coursesApi';
import ICourseData from '../../../../interfaces/course-data';

const FavoriteCourses = () => {
    const { data } = useFetchFavoriteCoursesQuery();

    const [courseArray, setCourseArray] = useState<ICourseData[] | []>([]);

    useEffect(() => {
        // pick the latest 6 courses
        data &&
            setCourseArray(data.length > 6 ? data.slice(data.length - 6, data.length) : data);

    }, [data]);

    return (
        <div className="favorite-courses__wrapper container pt-5">
            <div className="favorite-courses__title mb-5">
                <CourseTitle title="محبوب ترین دوره ها" subtitle="خفن ترین ها رو براتون آماده کردیم!" />
            </div>

            <div className="favorite-courses__content">
                <Swiper
                    spaceBetween={10}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: true,
                    }}
                    speed={1000}
                    slidesPerView={3}
                    loop={true}
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

export default FavoriteCourses;

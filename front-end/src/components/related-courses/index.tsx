import { useEffect, useState } from 'react';
import { RiStackshareLine } from 'react-icons/ri';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css/autoplay";
import "swiper/css/pagination";
import { useFetchFavoriteCoursesQuery } from '../../API/coursesApi';
import ICourseData from '../../interfaces/course-data';
import CourseBox from '../course-box';


const RelatedCourses = () => {
    const { data } = useFetchFavoriteCoursesQuery();

    const [courseArray, setCourseArray] = useState<ICourseData[] | []>([]);

    useEffect(() => {
        // pick the latest 6 courses
        data &&
            setCourseArray(data.length > 6 ? data.slice(data.length - 6, data.length) : data);

    }, [data]);

    return (
        <div className="course-details__side-bar__box">
            <div className="course-details__side-bar__related-courses">
                <div className="course-details__side-bar__related-courses__title d-flex align-items-center mb-3">
                    <RiStackshareLine size="1.6rem" />
                    <span className='px-2'>دوره های مرتبط</span>
                </div>
                <Swiper
                    spaceBetween={10}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: true,
                    }}
                    speed={1000}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                    modules={[Autoplay, Pagination]}
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

export default RelatedCourses;

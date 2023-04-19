import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import "./index.css";
import CourseTitle from "../../../../components/courses-title";
import Btn1 from "../../../../components/buttons/btn-1";
import Btn2 from "../../../../components/buttons/btn-2";
import { Autoplay } from 'swiper';
import { useFetchAllPostsQuery } from '../../../../API/articles';
import ICourseData from '../../../../interfaces/course-data';


const Articles = () => {
    const { data } = useFetchAllPostsQuery();

    const [articlesArray, setArticlesArray] = useState<ICourseData[] | []>([]);

    useEffect(() => {
        if (data) {
            // pick the last 6 courses
            data.length > 6 ? setArticlesArray(data.slice(0, 6)) : setArticlesArray(data);
        }
    }, [data]);

    return (
        <div className="container my-5">
            <div className="articles_wrapper d-flex justify-content-between">
                <CourseTitle title="جدیدترین مقاله ها" subtitle="پیش به سوی ارتقای دانش" />
                <Btn1 title="تمامی مقاله ها" link='/articles' />
            </div>

            <div className="articles__content row mt-5">



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

                    {articlesArray.map((articleObj, index) => (
                        <SwiperSlide key={index}>
                            <div className="articles__content__wrapper">
                                <div className="articles__image-box">
                                    <img src={require(`../../../../assets/images/articles/${articleObj.cover}`)} alt="article1" className="articles__image w-100" />
                                </div>

                                <div className="articles__content p-3 ">
                                    <Link to={`/article/${articleObj.shortName}`} className='article__link'>
                                        <div className="articles__title my-3 h5">
                                            {articleObj.title}
                                        </div>
                                    </Link>
                                    <div className="article__button">
                                        <Btn2 title="مشاهده مقاله" link={`/article/${articleObj.shortName}`} />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    );
};

export default Articles;

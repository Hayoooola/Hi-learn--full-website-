import { useContext } from "react";

import "./index.css";
import CourseTitle from "../../../../../components/courses-title";
import CourseContext from "../../../../../contexts/courseContext";

const CourseContent = () => {
    const courseContext = useContext(CourseContext);

    const courseTitle = courseContext.courseObj?.categoryID.title;
    const subTitle = `${courseContext.courseObj?.categoryID.title} ـ صفر تا صد`;

    return (
        <div className="course-content__container my-5">
            <div className="course-content__title">
                <  CourseTitle title={courseTitle || ""} subtitle={subTitle} />
            </div>
            <div className="course-content__content px-3 mt-5">
                لورم ایپسوم(Lorem ipsum) یک متن استاندارد است که در طراحی گرافیک و طراحی صفحات وب بکار می‌رود. این متن از کلمات آثاری از نوشته‌های ایزوگرام و دیگر نویسندگان لاتین و عدم وجود معنا، برای استفاده در نمونه‌های چاپ و اینترنت تولید شده است.

                این متن استاندارد با تعدادی پاراگراف در دسترس است که به عنوان نمونه از فونت‌ها و استایل‌های مختلف استفاده می‌شود. هدف از استفاده از این متن، این است که بدون توجه به معنای متن، طراحی صفحات و چاپ‌های مختلف را بررسی کنید و مطمئن شوید که صفحه شما درست نمایش داده می‌شود.

                لورم ایپسوم در سال‌های اولیه چاپ و زمانی که نوع‌چاپ هنوز مشخص نبود، به عنوان متن نمونه بکار گرفته شد. به خاطر سادگی و استفاده‌پذیری آن در طراحی فونت‌ها، به سرعت به یک معیار استاندارد در طراحی گرافیک تبدیل شد و تا به امروز مورد استفاده در بسیاری از نمونه‌های طراحی قرار گرفته است.

            </div>
        </div>
    );
};

export default CourseContent;

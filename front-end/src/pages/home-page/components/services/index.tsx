import { SiYoutubestudio } from "react-icons/si";
import { MdSchool } from "react-icons/md";
import { IoDiamondSharp } from "react-icons/io5";
import { MdVerifiedUser } from "react-icons/md";

import "./index.css";
import CourseTitle from "../../../../components/courses-title";

const Services = () => {
    return (
        <div className="services__wrapper container my-5">
            <div className="services__title">
                <CourseTitle title="ما چه کمکی بهتون می کنیم؟" subtitle="ما برای شما اینجاییم!" />
            </div >

            <div className="services__content my-5">
                <div className="services__content__wrapper row">

                    <div className="col-12 col-xl-6 mb-3">
                        <div className="services__content__box mx-1 d-flex ">

                            <div className="services__content__icon-wrapper mx-2">
                                <SiYoutubestudio size="4rem" />
                            </div>

                            <div className="services__content__body me-2">
                                <div className="services__content__body__title">
                                    <p className="h4">دوره های اختصاصی</p>
                                </div>
                                <div className="services__content__body__subtitle">
                                    <p className="me-2">با پشتیبانی و کیفیت بالا ارائه میده !</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-12 col-xl-6 mb-3">
                        <div className="services__content__box mx-1 d-flex ">

                            <div className="services__content__icon-wrapper mx-2">
                                <MdSchool size="4rem" />
                            </div>

                            <div className="services__content__body me-2">
                                <div className="services__content__body__title">
                                    <p className="h4">اجازه تدریس</p>
                                </div>
                                <div className="services__content__body__subtitle">
                                    <p className="me-2">
                                        به هر مدرسی رو نمیده. چون کیفیت براش مهمه !
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-12 col-xl-6 mb-3">
                        <div className="services__content__box mx-1 d-flex ">

                            <div className="services__content__icon-wrapper mx-2">
                                <IoDiamondSharp size="4rem" />
                            </div>

                            <div className="services__content__body me-2">
                                <div className="services__content__body__title">
                                    <p className="h4">
                                        دوره پولی و رایگان براش مهم نیست!
                                    </p>
                                </div>
                                <div className="services__content__body__subtitle">
                                    <p className="me-2">
                                        به مدرسینش حقوق میده تا نهایت کیفیت رو در پشتیبانی دوره ارائه بده
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-12 col-xl-6 mb-3">
                        <div className="services__content__box mx-1 d-flex ">

                            <div className="services__content__icon-wrapper mx-2">
                                <MdVerifiedUser size="4rem" />
                            </div>

                            <div className="services__content__body me-2">
                                <div className="services__content__body__title">
                                    <p className="h4">
                                        اهمیت به کاربر اولویت اول و آخر ماست!
                                    </p>
                                </div>
                                <div className="services__content__body__subtitle">
                                    <p className="me-2">
                                        اهمیت به کاربرها و رسوندن اونها به بازار کار مهمترین وظیفه ماست
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Services;

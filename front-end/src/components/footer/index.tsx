import { Link } from "react-router-dom";
import "./index.css";

const enamadImage = require("../../assets/images/other/enamad.png");

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="container">

                <div className="footer__header">
                    <div className="footer__header__title pt-5">
                        مختصری درباره <span className="fw-bold">های لرن</span>
                    </div>
                    <div className="footer__header__body py-3">
                        وقتی تازه شروع به یادگیری برنامه نویسی کردم. یکی از مشکلاتی که در فرآیند یادگیری داشتم، کمبود آموزش های خوب با پشتیبانی قابل قبول بود که باعث شد اون موقع تصمیم بگیرم اگر روزی توانایی مالی و فنی قابل قبولی داشتم یک وب سایت برای حل این مشکل راه اندازی کنم! و خب امروز آکادمی آموزش برنامه نویسی های لرن به عنوان یک آکادمی خصوصی فعالیت میکنه و این به این معنی هست که هر مدرسی اجازه تدریس در اون رو نداره و باید از فیلترینگ های خاص آکادمی های لرن رد شه! این به این معنی هست که ما برامون فن بیان و نحوه تعامل مدرس با دانشجو بسیار مهمه! ما در آکادمی های لرن تضمین پشتیبانی خوب و با کیفیت رو به شما میدیم . چرا که مدرسین وب سایت های لرن حتی برای پشتیبانی دوره های رایگان شون هم هزینه دریافت میکنند و متعهد هستند که هوای کاربر های عزیز رو داشته باشند
                    </div>
                </div>

                <div className="footer__content mt-3">
                    <div className="row">

                        <div className="footer__section-2 col-12 col-lg-6 col-xl-3 mb-5">
                            <div className="footer__section__title">
                                ساعات کاری:
                            </div>
                            <div>
                                شنبه تا چهارشنبه 8 صبح تا 18 عصر
                            </div>
                            <div>
                                پنج شنبه‌ها ساعت 8 صبح تا 12 ظهر
                            </div>
                        </div>

                        <div className="footer__section-3 col-12 col-lg-6 col-xl-3 mb-5">
                            <div className="footer__section__title">
                                ارتباط ما:

                            </div>
                            <div>
                                ایمیل : salar.atc1900@gmail.com

                            </div>
                            <div>
                                شماره تماس : <a href="tel:+989352838975">09352838975</a>

                            </div>
                        </div>

                        <div className="footer__section-1 col-12 col-lg-6 col-xl-3 mb-5">
                            <div className="row">
                                <div className="col-6">
                                    <div className="footer__menu">
                                        <Link to="/courses/all" className="footer__link">
                                            فروشگاه
                                        </Link>
                                    </div>
                                    <div className="footer__menu__separator " />

                                    <div className="footer__menu">
                                        <Link to="#" className="footer__link">
                                            ارتباط با ما
                                        </Link>
                                    </div>
                                    <div className="footer__menu__separator" />

                                    <div className="footer__menu">
                                        <Link to="#" className="footer__link">
                                            درباره ما
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="footer__menu">
                                        <Link to="articles" className="footer__link">
                                            مقالات
                                        </Link>
                                    </div>
                                    <div className="footer__menu__separator " />

                                    <div className="footer__menu">
                                        <Link to="#" className="footer__link">
                                            قوانین و مقررات
                                        </Link>
                                    </div>
                                    <div className="footer__menu__separator" />

                                    <div className="footer__menu">
                                        <Link to="/course/python" className="footer__link">
                                            آموزش پایتون
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="footer__section-4 col-12 col-lg-6 col-xl-3 mb-5">
                            <div className="d-flex justify-content-center w-100">
                                <div className="enamad__wrapper">
                                    <img src={enamadImage} alt="enamad" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="footer__copy-right">
                    <div className="footer__copy-right__wrapper text-center">
                        © کلیه حقوق برای <span><a href="#" className="footer__brand">های لرن</a></span> محفوظ است 1402
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

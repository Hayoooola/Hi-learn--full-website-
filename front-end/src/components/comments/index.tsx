import { Rating } from "@mui/material";
import { FaCommentAlt } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";

import "./index.css";
import Btn2 from "../buttons/btn-2";

const CommentSection = () => {
    return (
        <div className="comment-section">
            <div className="comment-section__container px-2">
                <div className="comment-section__header my-5">
                    <div className="d-flex align-items-center">
                        <span className="comment-section__comment-icon mx-2"><FaCommentAlt size="1.4rem" /></span>
                        <span className="comment-section__header__title">نظرات</span>
                    </div>
                </div>
                <div className="comment-section__body mx-2">
                    <div className="comment-section__body__title mb-3">
                        88  دیدگاه برای آموزش حرفه ای جنگو
                    </div>
                    <div className="comment-section__body__comments px-3">
                        <div className="comment-section__comment-box mb-5">
                            <div className="comment-section__question mb-3">
                                <div className="comment-section__user-info__wrapper">
                                    <div className="comment-section__user-info d-flex align-items-center">
                                        <span className="comment-section__user-name mx-1">
                                            کاربر سایت
                                        </span>
                                        <span className="comment-section__user-role mx-1">
                                            {`(خریدار محصول)`}
                                        </span>
                                        <span className="comment-section__separator mx-1"></span>
                                        <span className="comment-section__question-date mx-1">
                                            2023/04/08
                                        </span>
                                    </div>
                                    <div className="comment-section__user-rating d-flex align-items-center">
                                        <span className="px-2">امتیاز:</span>
                                        <span><Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly /></span>
                                    </div>
                                </div>
                                <p className="comment-section__question__content mt-2">
                                    سلام استاد ببخشید یه مشکلی برام پیش اومده من وقتی shape ها رو تنظیم میکنم بعدش سایت اسکرول میخوره من به body overflow-x:hidden میدم اما بازم اسکرول داره
                                </p>
                                <div className="comment-section__question__reply">
                                    <span className="comment-section__question__reply__title">پاسخ به این نظر</span>
                                </div>
                            </div>
                            <div className="comment-section__answers">
                                <div className="comment-section__user-info__wrapper">
                                    <div className="comment-section__user-info d-flex align-items-center">
                                        <span className="comment-section__user-name mx-1">
                                            سالار ترابی
                                        </span>
                                        <span className="comment-section__user-role mx-1">
                                            {`(مدرس دوره)`}
                                        </span>
                                        <span className="comment-section__separator mx-1"></span>
                                        <span className="comment-section__question-date mx-1">
                                            2023/04/08
                                        </span>
                                    </div>
                                    {/* <div className="comment-section__user-rating d-flex align-items-center">
                                        <span className="px-2">امتیاز:</span>
                                        <span><Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly /></span>
                                    </div> */}
                                </div>
                                <p className="comment-section__question__content mt-2">
                                    سلام استاد ببخشید یه مشکلی برام پیش اومده من وقتی shape ها رو تنظیم میکنم بعدش سایت اسکرول میخوره من به body overflow-x:hidden میدم اما بازم اسکرول داره
                                </p>
                                <div className="comment-section__question__reply">
                                    <span className="comment-section__question__reply__title">پاسخ به این نظر</span>
                                </div>
                            </div>
                        </div>
                        <div className="comment-section__comment-box mb-5">
                            <div className="comment-section__question mb-3">
                                <div className="comment-section__user-info__wrapper">
                                    <div className="comment-section__user-info d-flex align-items-center">
                                        <span className="comment-section__user-name mx-1">
                                            کاربر سایت
                                        </span>
                                        <span className="comment-section__user-role mx-1">
                                            {`(خریدار محصول)`}
                                        </span>
                                        <span className="comment-section__separator mx-1"></span>
                                        <span className="comment-section__question-date mx-1">
                                            2023/04/08
                                        </span>
                                    </div>
                                    <div className="comment-section__user-rating d-flex align-items-center">
                                        <span className="px-2">امتیاز:</span>
                                        <span><Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly /></span>
                                    </div>
                                </div>
                                <p className="comment-section__question__content mt-2">
                                    سلام استاد ببخشید یه مشکلی برام پیش اومده من وقتی shape ها رو تنظیم میکنم بعدش سایت اسکرول میخوره من به body overflow-x:hidden میدم اما بازم اسکرول داره
                                </p>
                                <div className="comment-section__question__reply">
                                    <span className="comment-section__question__reply__title">پاسخ به این نظر</span>
                                </div>
                            </div>
                            <div className="comment-section__answers">
                                <div className="comment-section__user-info__wrapper">
                                    <div className="comment-section__user-info d-flex align-items-center">
                                        <span className="comment-section__user-name mx-1">
                                            سالار ترابی
                                        </span>
                                        <span className="comment-section__user-role mx-1">
                                            {`(مدرس دوره)`}
                                        </span>
                                        <span className="comment-section__separator mx-1"></span>
                                        <span className="comment-section__question-date mx-1">
                                            2023/04/08
                                        </span>
                                    </div>
                                    {/* <div className="comment-section__user-rating d-flex align-items-center">
                                        <span className="px-2">امتیاز:</span>
                                        <span><Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly /></span>
                                    </div> */}
                                </div>
                                <p className="comment-section__question__content mt-2">
                                    سلام استاد ببخشید یه مشکلی برام پیش اومده من وقتی shape ها رو تنظیم میکنم بعدش سایت اسکرول میخوره من به body overflow-x:hidden میدم اما بازم اسکرول داره
                                </p>
                                <div className="comment-section__question__reply">
                                    <span className="comment-section__question__reply__title">پاسخ به این نظر</span>
                                </div>
                            </div>
                        </div>
                        <div className="comment-section__comment-box mb-5">
                            <div className="comment-section__question mb-3">
                                <div className="comment-section__user-info__wrapper">
                                    <div className="comment-section__user-info d-flex align-items-center">
                                        <span className="comment-section__user-name mx-1">
                                            کاربر سایت
                                        </span>
                                        <span className="comment-section__user-role mx-1">
                                            {`(خریدار محصول)`}
                                        </span>
                                        <span className="comment-section__separator mx-1"></span>
                                        <span className="comment-section__question-date mx-1">
                                            2023/04/08
                                        </span>
                                    </div>
                                    <div className="comment-section__user-rating d-flex align-items-center">
                                        <span className="px-2">امتیاز:</span>
                                        <span><Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly /></span>
                                    </div>
                                </div>
                                <p className="comment-section__question__content mt-2">
                                    سلام استاد ببخشید یه مشکلی برام پیش اومده من وقتی shape ها رو تنظیم میکنم بعدش سایت اسکرول میخوره من به body overflow-x:hidden میدم اما بازم اسکرول داره
                                </p>
                                <div className="comment-section__question__reply">
                                    <span className="comment-section__question__reply__title">پاسخ به این نظر</span>
                                </div>
                            </div>
                            <div className="comment-section__answers">
                                <div className="comment-section__user-info__wrapper">
                                    <div className="comment-section__user-info d-flex align-items-center">
                                        <span className="comment-section__user-name mx-1">
                                            سالار ترابی
                                        </span>
                                        <span className="comment-section__user-role mx-1">
                                            {`(مدرس دوره)`}
                                        </span>
                                        <span className="comment-section__separator mx-1"></span>
                                        <span className="comment-section__question-date mx-1">
                                            2023/04/08
                                        </span>
                                    </div>
                                    {/* <div className="comment-section__user-rating d-flex align-items-center">
                                        <span className="px-2">امتیاز:</span>
                                        <span><Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly /></span>
                                    </div> */}
                                </div>
                                <p className="comment-section__question__content mt-2">
                                    سلام استاد ببخشید یه مشکلی برام پیش اومده من وقتی shape ها رو تنظیم میکنم بعدش سایت اسکرول میخوره من به body overflow-x:hidden میدم اما بازم اسکرول داره
                                </p>
                                <div className="comment-section__question__reply">
                                    <span className="comment-section__question__reply__title">پاسخ به این نظر</span>
                                </div>
                            </div>
                        </div>
                        <div className="comment-section__comment-box mb-5">
                            <div className="comment-section__question mb-3">
                                <div className="comment-section__user-info__wrapper">
                                    <div className="comment-section__user-info d-flex align-items-center">
                                        <span className="comment-section__user-name mx-1">
                                            کاربر سایت
                                        </span>
                                        <span className="comment-section__user-role mx-1">
                                            {`(خریدار محصول)`}
                                        </span>
                                        <span className="comment-section__separator mx-1"></span>
                                        <span className="comment-section__question-date mx-1">
                                            2023/04/08
                                        </span>
                                    </div>
                                    <div className="comment-section__user-rating d-flex align-items-center">
                                        <span className="px-2">امتیاز:</span>
                                        <span><Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly /></span>
                                    </div>
                                </div>
                                <p className="comment-section__question__content mt-2">
                                    سلام استاد ببخشید یه مشکلی برام پیش اومده من وقتی shape ها رو تنظیم میکنم بعدش سایت اسکرول میخوره من به body overflow-x:hidden میدم اما بازم اسکرول داره
                                </p>
                                <div className="comment-section__question__reply">
                                    <span className="comment-section__question__reply__title">پاسخ به این نظر</span>
                                </div>
                            </div>
                            <div className="comment-section__answers">
                                <div className="comment-section__user-info__wrapper">
                                    <div className="comment-section__user-info d-flex align-items-center">
                                        <span className="comment-section__user-name mx-1">
                                            سالار ترابی
                                        </span>
                                        <span className="comment-section__user-role mx-1">
                                            {`(مدرس دوره)`}
                                        </span>
                                        <span className="comment-section__separator mx-1"></span>
                                        <span className="comment-section__question-date mx-1">
                                            2023/04/08
                                        </span>
                                    </div>
                                    {/* <div className="comment-section__user-rating d-flex align-items-center">
                                        <span className="px-2">امتیاز:</span>
                                        <span><Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly /></span>
                                    </div> */}
                                </div>
                                <p className="comment-section__question__content mt-2">
                                    سلام استاد ببخشید یه مشکلی برام پیش اومده من وقتی shape ها رو تنظیم میکنم بعدش سایت اسکرول میخوره من به body overflow-x:hidden میدم اما بازم اسکرول داره
                                </p>
                                <div className="comment-section__question__reply">
                                    <span className="comment-section__question__reply__title">پاسخ به این نظر</span>
                                </div>
                            </div>
                        </div>
                        <div className="comment-section__comment-box mb-5">
                            <div className="comment-section__question mb-3">
                                <div className="comment-section__user-info__wrapper">
                                    <div className="comment-section__user-info d-flex align-items-center">
                                        <span className="comment-section__user-name mx-1">
                                            کاربر سایت
                                        </span>
                                        <span className="comment-section__user-role mx-1">
                                            {`(خریدار محصول)`}
                                        </span>
                                        <span className="comment-section__separator mx-1"></span>
                                        <span className="comment-section__question-date mx-1">
                                            2023/04/08
                                        </span>
                                    </div>
                                    <div className="comment-section__user-rating d-flex align-items-center">
                                        <span className="px-2">امتیاز:</span>
                                        <span><Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly /></span>
                                    </div>
                                </div>
                                <p className="comment-section__question__content mt-2">
                                    سلام استاد ببخشید یه مشکلی برام پیش اومده من وقتی shape ها رو تنظیم میکنم بعدش سایت اسکرول میخوره من به body overflow-x:hidden میدم اما بازم اسکرول داره
                                </p>
                                <div className="comment-section__question__reply">
                                    <span className="comment-section__question__reply__title">پاسخ به این نظر</span>
                                </div>
                            </div>
                            <div className="comment-section__answers">
                                <div className="comment-section__user-info__wrapper">
                                    <div className="comment-section__user-info d-flex align-items-center">
                                        <span className="comment-section__user-name mx-1">
                                            سالار ترابی
                                        </span>
                                        <span className="comment-section__user-role mx-1">
                                            {`(مدرس دوره)`}
                                        </span>
                                        <span className="comment-section__separator mx-1"></span>
                                        <span className="comment-section__question-date mx-1">
                                            2023/04/08
                                        </span>
                                    </div>
                                    {/* <div className="comment-section__user-rating d-flex align-items-center">
                                        <span className="px-2">امتیاز:</span>
                                        <span><Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly /></span>
                                    </div> */}
                                </div>
                                <p className="comment-section__question__content mt-2">
                                    سلام استاد ببخشید یه مشکلی برام پیش اومده من وقتی shape ها رو تنظیم میکنم بعدش سایت اسکرول میخوره من به body overflow-x:hidden میدم اما بازم اسکرول داره
                                </p>
                                <div className="comment-section__question__reply">
                                    <span className="comment-section__question__reply__title">پاسخ به این نظر</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="comment-section__submit-comment my-5 mx-3">
                    <div className="comment-section__submit-comment__rules">
                        <div className="comment-section__submit-comment__rules__title mb-2">قوانین ثبت دیدگاه</div>
                        <ul>
                            <li className="comment-section__submit-comment__rule">
                                <GiCheckMark size=".8rem" className="mx-2" />
                                <span> دیدگاه های نامرتبط به دوره تایید نخواهد شد.</span>
                            </li>
                            <li className="comment-section__submit-comment__rule">
                                <GiCheckMark size=".8rem" className="mx-2" />
                                <span> سوالات مرتبط با رفع اشکال در این بخش تایید نخواهد شد.</span>
                            </li>
                            <li className="comment-section__submit-comment__rule">
                                <GiCheckMark size=".8rem" className="mx-2" />
                                <span> از درج دیدگاه های تکراری پرهیز نمایید.</span>
                            </li>
                            <li className="comment-section__submit-comment__rule">
                                <GiCheckMark size=".8rem" className="mx-2" />
                                <span> اگر نیاز به پشتیبانی دوره دارید از قسمت پرسش سوال در قسمت نمایش انلاین استفاده نمایید و سوالات مربوط به رفع اشکال تایید نخواهند شد</span>
                            </li>
                        </ul>
                    </div>
                    <div className="comment-section__submit-comment__rating my-2">
                        <div className="d-flex">
                            <span className="comment-section__submit-comment__rating-title px-2">امتیاز شما:</span>
                            <span className="comment-section__submit-comment__rating-rate">
                                <Rating name="half-rating" defaultValue={2.5} precision={0.5} dir="ltr" />
                            </span>
                        </div>

                        <div className="comment-section__submit-comment__comment-title px-3">دیدگاه شما:</div>
                        <textarea className="comment-section_comment-body"></textarea>
                        <div className="comment-section__submit-comment-btn">
                            <Btn2 title="ثبت دیدگاه" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentSection;

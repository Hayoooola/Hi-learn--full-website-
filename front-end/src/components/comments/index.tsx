import { FC } from "react";
import moment from "jalali-moment";
import { Rating } from "@mui/material";
import { FaCommentAlt } from "react-icons/fa";

import "./index.css";
import IComment from "../../interfaces/comments";
import NewComment from "./newComment";

interface IProps {
    comments: IComment[] | [] | undefined;
    title: string | undefined;
}


const CommentSection: FC<IProps> = ({ comments, title }) => {
    const commentsArray = comments || [];

    const detectCommentCreatorRole = (commentObj: IComment) => {
        const creatorRole = commentObj.creator.role;

        if (creatorRole === "ADMIN") {
            return "مدرس";
        } else {
            return "کاربر سایت";
        }
    };


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

                        {comments && comments.length > 0 ?
                            `${comments && comments.length}  دیدگاه برای "${title && title}"` :
                            `دیدگاهی برای "${title && title}" ثبت نشده است.`
                        }

                    </div>
                    <div className="comment-section__body__comments px-3">

                        {commentsArray.length > 0 && commentsArray.map((commentObj, index) => (
                            <div className="comment-section__comment-box mb-5" key={index}>
                                <div className="comment-section__question mb-3">
                                    <div className="comment-section__user-info__wrapper pt-3">
                                        <div className="comment-section__user-info d-flex align-items-center">
                                            <span className="comment-section__user-name mx-1">
                                                {commentObj.creator.name}
                                            </span>
                                            <span className="comment-section__user-role mx-1">
                                                {detectCommentCreatorRole(commentObj)}
                                            </span>
                                            <span className="comment-section__separator mx-1"></span>
                                            <span className="comment-section__question-date mx-1">
                                                {moment(commentObj.createdAt.slice(0, 10)).locale("fa").format('DD/ MM/ YYYY')}
                                            </span>
                                        </div>
                                        <div className="comment-section__user-rating d-flex align-items-center">
                                            <span className="px-2">امتیاز:</span>
                                            <span><Rating name="half-rating-read" defaultValue={commentObj.score || 3} precision={0.5} readOnly /></span>
                                        </div>
                                    </div>
                                    <p className="comment-section__question__content mt-2">
                                        {commentObj.body}
                                    </p>
                                </div>
                                {/* <div className="comment-section__answers">
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
                                    </div>
                                    <p className="comment-section__question__content mt-2">
                                        سلام استاد ببخشید یه مشکلی برام پیش اومده من وقتی shape ها رو تنظیم میکنم بعدش سایت اسکرول میخوره من به body overflow-x:hidden میدم اما بازم اسکرول داره
                                    </p>
                                    <div className="comment-section__question__reply">
                                        <span className="comment-section__question__reply__title">پاسخ به این نظر</span>
                                    </div>
                                </div> */}
                            </div>
                        ))}

                    </div>
                </div>

                <NewComment />
            </div>
        </div>
    );
};

export default CommentSection;

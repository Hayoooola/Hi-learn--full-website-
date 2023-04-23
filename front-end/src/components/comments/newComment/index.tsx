import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Rating } from '@mui/material';
import { GiCheckMark } from 'react-icons/gi';

import { useCommitCommentMutation } from '../../../API/comments';

const NewComment = () => {
    const commentBody = useRef<HTMLTextAreaElement>(null);
    const commentRating = useRef<HTMLInputElement>(null);
    const [score, setScore] = useState(4.5);
    const token = localStorage.getItem("token") && JSON.parse(localStorage.getItem("token") || "") || "";

    const { courseShortName } = useParams();

    const [commitComment, { data, isError, error }] = useCommitCommentMutation();


    const scoreHandler = (event: SyntheticEvent<Element, Event>, value: number | null) => {
        setScore(value || 4.5);
    };


    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const body = commentBody.current?.value;

        commitComment({ courseShortName, body, score, token });
    };


    // handel requests
    useEffect(() => {
        if (isError) {
            if (error && "status" in error) {
                error.status === 403 ?
                    toast.error("برای ثبت دیدگاه ابتدا باید وارد حساب کاربری شوید!") :
                    toast.error("مشکلی ار ارسال دیدگاه شما به پایگاه داده به وجود آمده!");
            }
        }

        data && toast.success("دیدگاه شما با موفقیت ارسال شد و پس از تایید به نمایش می رسد.");
    }, [data, isError, error]);



    return (
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
                        <Rating ref={commentRating} onChange={scoreHandler} value={4.5} precision={0.5} dir="ltr" />
                    </span>
                </div>

                <div className="comment-section__submit-comment__comment-title px-3">دیدگاه شما:</div>
                <form onSubmit={submitHandler}>
                    <textarea ref={commentBody} className="comment-section_comment-body" required></textarea>
                    <input type="submit" value="ثبت دیدگاه" className='comment-section__submit-comment-btn' />
                </form>
            </div>
        </div>
    );
};

export default NewComment;

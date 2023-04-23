import { FC } from "react";
import moment from "jalali-moment";
import { Rating } from "@mui/material";
import { FaFolder } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { BsCalendarDateFill } from "react-icons/bs";
import { BsEye } from "react-icons/bs";

import "./index.css";
import CommentSection from "../../../components/comments";
import IArticle from "../../../interfaces/articles";

interface IProps {
    articleObj: IArticle | null;
}

const ArticleBody: FC<IProps> = ({ articleObj }) => {
    return (
        <div className="article-container mx-2">
            <div className="article-header mb-5">
                <p className="article-title">
                    {articleObj?.title}
                </p>
                <div className="article-info d-flex align-items-center">
                    <div className="article-info__category d-flex mx-2">
                        <FaFolder size="1.2rem" />
                        <span className="article-info__text px-1">
                            {articleObj?.categoryID.title}
                        </span>
                    </div>
                    <div className="article-info__writer d-flex mx-2">
                        <TfiWrite size="1.2rem" />
                        <span className="article-info__text px-1">
                            نویسنده: {articleObj?.creator.name}
                        </span>
                    </div>
                    <div className="article-info__date d-flex mx-2">
                        <BsCalendarDateFill size="1.2rem" />
                        <span className="article-info__text px-1">
                            {moment(articleObj?.updatedAt.toString().slice(0, 10)).locale("fa").format("DD/ MM/ YYYY")}
                        </span>
                    </div>
                    <div className="article-info__view d-flex mx-2">
                        <BsEye size="1.2rem" />
                        <span className="article-info__text px-1">
                            2.14k بازدید
                        </span>
                    </div>
                </div>
                <img src={articleObj && require(`../../../assets/images/articles/${articleObj?.cover}`)} alt={articleObj?.title} className="article-main-image my-3" />
                <div className="article-rating d-flex">
                    <span className="mx-2">امتیاز:</span>
                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} dir="ltr" readOnly />
                    <span className="mx-1">‍‍{`(از 12 رای)`}</span>
                </div>
                <div className="article-excerpt my-5">
                    {articleObj?.body}
                </div>
                <div className="article-comment-section pt-5">
                    <CommentSection comments={articleObj?.comments} title={articleObj?.title} />
                </div>
            </div>
        </div>
    );
};

export default ArticleBody;

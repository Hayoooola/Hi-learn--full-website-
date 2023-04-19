import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import moment from "jalali-moment";

import "./index.css";
import { useFetchAllPostsQuery } from "../../../API/articles";
import Pagination from "../../../components/pagination";
import ICourseData from "../../../interfaces/course-data";

const ArticleBody = () => {
    const { data } = useFetchAllPostsQuery();
    const { pageNumber } = useParams();

    const [postsArray, setPostsArray] = useState<ICourseData[] | []>([]);
    const [articlesToShow, setArticlesToShow] = useState<ICourseData[] | []>([]);
    const [activePage, setActivePage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);

    useMemo(() => {
        data && setPostsArray(data);
    }, [data]);

    useMemo(() => {
        pageNumber && setActivePage(+pageNumber);
    }, [pageNumber]);


    return (
        <div>
            <div className="row mb-5">

                {articlesToShow.map((article, index) => (
                    <div className="col-12 col-lg-6 col-xl-4 mb-3" key={index}>
                        <div className="articles-page__image-box position-relative">
                            <img src={require(`../../../assets/images/articles/${article.cover}`)} alt={article.name} className="articles-page__image w-100" />

                            <div className="articles-page__content p-3 w-100">
                                <Link to={`/article/${article.shortName}`} className='article__link'>
                                    <div className="articles-page__title my-3 h5">
                                        {article.title}
                                    </div>
                                </Link>
                            </div>

                            <div className="articles-page-info d-flex justify-content-between">
                                <div className="articles-page-info_admin-wrapper">
                                    <div> ارسال شده توسط: <span className="articles-page-info_admin">{article.creator.name}</span></div>
                                </div>
                                <div className="articles-page__data">
                                    {moment(article.createdAt.toString().slice(0, 10)).locale("fa").format("DD/ MM/ YYYY")}
                                </div>
                            </div>
                            <div className="articles-page__image-mask"></div>
                        </div>
                    </div>
                ))}

            </div>

            <Pagination activePage={activePage} allItems={postsArray} baseUrl="/articles" itemsPerPage={itemsPerPage} itemsToShow={setArticlesToShow} />
        </div>

    );
};

export default ArticleBody;

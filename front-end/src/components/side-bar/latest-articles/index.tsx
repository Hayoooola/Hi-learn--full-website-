import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiCheckMark } from "react-icons/gi";

import { useFetchAllPostsQuery } from "../../../API/articles";
import ICourseData from "../../../interfaces/course-data";


const LatestArticle = () => {
    const { data } = useFetchAllPostsQuery();

    const [articles, setArticles] = useState<ICourseData[] | []>([]);

    useEffect(() => {
        if (data) {
            data.length >= 5 ? setArticles(data.slice(0, 5)) : setArticles(data);
        }
    }, [data]);


    return (
        <div className="side-bar-box">
            <div className="latest-articles">
                <div className="side-bar-box__title">
                    جدیدترین مقالات
                </div>
                <div className="side-bar-box__menu">
                    <ul>

                        {articles.map((article, index) => (
                            <li key={index}>
                                <  GiCheckMark className="ms-2" size=".9rem" />
                                <Link to={`/article/${article.shortName}`} className="side-bar-box__link">
                                    {article.title}
                                </Link>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LatestArticle;

import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useFetchSingleCourseQuery } from '../../API/articles';
import BreadCrumbs from '../../components/breadCrumbs';
import SideBar from '../../components/side-bar';
import ArticleBody from './article-body';
import IArticle from '../../interfaces/articles';

const Article = () => {
    const { shortName } = useParams();

    const { data } = useFetchSingleCourseQuery(shortName || "");

    const [articleObj, setArticleObj] = useState<IArticle | null>(null);

    useMemo(() => {
        data && setArticleObj(data);
    }, [data]);

    return (
        <div className='container'>
            <div className="mx-2">
                <BreadCrumbs title={articleObj?.title || ""} />
            </div>

            <div className="row">
                <div className="article-main col-12 col-xl-8">
                    <div className="mx-2 mb-5">
                        <ArticleBody articleObj={articleObj} />
                    </div>
                </div>
                <div className="article-side-bar col-12 col-xl-4">
                    <div className="mx-2 mb-5 article-side-bar__wrapper">
                        <SideBar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;

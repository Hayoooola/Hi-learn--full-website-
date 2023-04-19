import "./index.css";
import SideBar from "../../components/side-bar";
import ArticleBody from "./body";

const Articles = () => {
    return (
        <div className='container-fluid p-5'>
            <div className="row">
                <div className="article-main col-12 col-lg-8 col-xl-9">
                    <div className="mx-2 my-3">
                        <ArticleBody />
                    </div>
                </div>
                <div className="article-side-bar col-12 col-lg-4 col-xl-3">
                    <div className="mx-2 my-3 article-side-bar__wrapper">
                        <SideBar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Articles;

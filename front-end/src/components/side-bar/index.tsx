import FavoriteCourses from "./favorite-courses";
import "./index.css";
import LatestArticle from "./latest-articles";

const SideBar = () => {
    return (
        <div className="mx-2 ">
            <LatestArticle />
            <FavoriteCourses />
        </div>
    );
};

export default SideBar;

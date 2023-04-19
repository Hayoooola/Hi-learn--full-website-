import "./index.css";
import FilterByCategory from "./filter-by-category";
import Poster from "./poster";


const CategorySideBar = () => {
    return (
        <div className="course-category-side-bar">
            <FilterByCategory />
            <Poster />
        </div>
    );
};

export default CategorySideBar;

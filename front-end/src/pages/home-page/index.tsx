import MainSlider from "./components/main-slider/main-slider";
import NewestCourses from "./components/newest-courses";
import Services from "./components/services";
import FavoriteCourses from "./components/favorite-courses";
import PreSaleCourses from "./components/pre-sale-courses";
import Articles from "./components/articles";

const HomePage = () => {
    return (
        <section>
            <MainSlider />
            <NewestCourses />
            <Services />
            <FavoriteCourses />
            <PreSaleCourses />
            <Articles />
        </section>
    );
};

export default HomePage;

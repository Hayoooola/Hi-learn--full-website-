import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./index.css";
import FilterBox from "./components/header";
import CourseBody from "./components/body";
import Loading from "../../components/loading";
import { CategoryContextProvider } from "../../contexts/categoryContext";
import { useFetchAllCoursesQuery } from "../../API/coursesApi";
import ICourseData from "../../interfaces/course-data";
import CategorySideBar from "./components/side-bar";
import Pagination from "../../components/pagination";


const CourseCategory = () => {
    const { courseCategory, pageNumber, order } = useParams();

    const [category, setCategory] = useState(courseCategory || "");
    const [activePage, setActivePage] = useState(pageNumber ? +pageNumber : 1);
    const [baseUrl, setBaseUrl] = useState("/");


    const { data } = useFetchAllCoursesQuery(null);

    const [allCourses, setAllCourses] = useState<ICourseData[] | []>([]);
    const [coursesArray, setCoursesArray] = useState<ICourseData[] | []>([]);
    const [loading, setLoading] = useState(true);
    const [coursesToShow, setCoursesToShow] = useState<ICourseData[] | []>([]);
    const [coursePerPage, setCoursePerPage] = useState(6);


    // requiring react to re-render component while changing url
    useEffect(() => {
        courseCategory && setCategory(courseCategory);

        pageNumber ? setActivePage(+pageNumber) : setActivePage(1);

        order ? setBaseUrl(`/courses/${courseCategory}/${order}`) : setBaseUrl(`/courses/${courseCategory}`);
    }, [courseCategory, pageNumber, order]);


    useEffect(() => {
        if (data) {
            setAllCourses(data);
            setCoursesArray(filterCoursesByCategory(data));
            setLoading(false);
        }

    }, [data]);


    // reset courses on the basis of url
    useEffect(() => {
        data && setCoursesArray(filterCoursesByCategory(data));
    }, [category]);


    // filtering courses by category selected
    const filterCoursesByCategory = (coursesArray: ICourseData[]) => {
        return courseCategory === "all" ?
            coursesArray :
            coursesArray.filter(courseObj => courseObj.categoryID.name === category);
    };


    return (
        <CategoryContextProvider value={{ allCourses, coursesArray, coursesToShow, setCoursesArray, coursePerPage: 2 }}>

            {loading ?
                <Loading /> :
                <div className="container-fluid">
                    <div className="row px-5">
                        <div className="col-12 col-lg-4 col-xl-3 mt-3">
                            <CategorySideBar />
                        </div>

                        <div className="col-12 col-lg-8 col-xl-9">
                            <FilterBox />
                            <CourseBody />
                            <Pagination
                                activePage={activePage}
                                itemsPerPage={coursePerPage}
                                baseUrl={baseUrl}
                                allItems={coursesArray}
                                itemsToShow={(courses) => setCoursesToShow(courses)} />
                        </div>
                    </div>
                </div>}

        </CategoryContextProvider>
    );
};

export default CourseCategory;

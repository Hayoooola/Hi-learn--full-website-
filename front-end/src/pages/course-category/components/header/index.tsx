import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./index.css";
import SortBy from "../../../../components/sort-by";
import CategoryContext from "../../../../contexts/categoryContext";

const FilterBox = () => {
    const { courseCategory, pageNumber, order: orderText } = useParams();

    const categoryContext = useContext(CategoryContext);
    const courseArray = categoryContext.coursesArray;
    const setCourseArray = categoryContext.setCoursesArray;
    const coursePerPage = categoryContext.coursePerPage;

    const [baseUrl, setBaseUrl] = useState("/");
    const [order, setOrder] = useState("default");
    const [activePage, setActivePage] = useState(pageNumber ? +pageNumber : 1);

    useEffect(() => {
        setBaseUrl(`/courses/${courseCategory}`);

        orderText && setOrder(orderText.slice(8));

        pageNumber && setActivePage(+pageNumber);
    }, [courseCategory, pageNumber, orderText]);

    return (
        <div className="container mt-3 mb-5">
            <SortBy courseArray={courseArray} setCourseArray={setCourseArray} baseUrl={baseUrl} order={order} activePage={activePage} coursePerPage={coursePerPage} />
        </div>
    );
};

export default FilterBox;


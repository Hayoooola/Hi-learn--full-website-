import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaFilter } from "react-icons/fa";

import "./index.css";
import { useFetchAllCategoriesQuery } from "../../../../../API/coursesApi";
import CheckBox from "../../../../../components/checkBox";
import CategoryContext from "../../../../../contexts/categoryContext";
import ICourseData from "../../../../../interfaces/course-data";

interface ICategoryArray {
    name: string,
    value: string;
}

const FilterByCategory = () => {
    const { data, isError } = useFetchAllCategoriesQuery();

    const { courseCategory: currentCategory } = useParams();
    const [categoryArray, setCategoryArray] = useState<ICategoryArray[]>([]);
    const [filterArray, setFilterArray] = useState<string[]>([]);

    const categoryContext = useContext(CategoryContext);
    const allCourses = categoryContext.allCourses;
    const setCoursesArray = categoryContext.setCoursesArray;


    useEffect(() => {
        const categoriesArray = data ?
            data.map(categoryObj => ({ name: categoryObj.title, value: categoryObj.name })) : [];

        data && setCategoryArray(categoriesArray);
    }, [data, isError]);


    useEffect(() => {
        currentCategory && setFilterArray([currentCategory]);

    }, [currentCategory]);


    // preparing courses to show by choosing category
    useEffect(() => {
        const filteredCourseArray: ICourseData[] = [];

        filterArray.map(item => {
            const singleFilterArray = allCourses.filter(course => course.categoryID.name === item);

            singleFilterArray.map(item => filteredCourseArray.push(item));
        });

        setCoursesArray(filteredCourseArray);
    }, [filterArray, currentCategory]);


    const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.checked ?
            setFilterArray([...filterArray, e.currentTarget.value]) :
            setFilterArray(filterArray.filter((item) => item !== e.currentTarget.value));
    };



    return (
        <div className="course-details__side-bar__box course-category-filter-bar">
            <div className="course-category__side-bar__title d-flex">
                <FaFilter size="1.6rem" />
                <span className="mx-2">دسته بندی دوره ها</span>
            </div>
            <div className="course-category__side-bar__filter-wrapper">

                {categoryArray.map((category, index) => (
                    <div className="course-category__filter-item" key={index}>

                        {filterArray.includes(category.value) ?
                            <CheckBox name={category.name} value={category.value} onChange={filterHandler} checked={true} /> :
                            <CheckBox name={category.name} value={category.value} onChange={filterHandler} checked={false} />
                        }

                    </div>
                ))}

            </div>
        </div>
    );
};

export default FilterByCategory;

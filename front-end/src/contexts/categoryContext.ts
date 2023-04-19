import { createContext } from "react";

import ICourseData from "../interfaces/course-data";

interface ICategoryContext {
    allCourses: ICourseData[] | [];
    coursesArray: ICourseData[] | [];
    coursesToShow: ICourseData[] | [];
    coursePerPage: number;
    setCoursesArray: (coursesArray: ICourseData[] | []) => void;
}

const CategoryContext = createContext<ICategoryContext>({
    allCourses: [],
    coursesArray: [],
    coursesToShow: [],
    coursePerPage: 2,
    setCoursesArray: () => { }
},);

export const CategoryContextProvider = CategoryContext.Provider;
export default CategoryContext;
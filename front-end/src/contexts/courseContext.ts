import { createContext } from "react";

import ICourseData from "../interfaces/course-data";

interface IContext {
    courseObj: ICourseData | null;
}

const CourseContext = createContext<IContext>({
    courseObj: null
});

export const CourseContextProvide = CourseContext.Provider;
export default CourseContext;
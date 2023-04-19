import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BreadCrumbs from "../../components/breadCrumbs";
import CourseExplanation from "./course-explanation";
import CourseDetails from "./course-details";
import { useFetchSelectedCourseMutation } from "../../API/coursesApi";
import ICourseData from "../../interfaces/course-data";
import { CourseContextProvide } from "../../contexts/courseContext";
import IRoutes from "../../interfaces/routes";

const Course = () => {
    const { courseShortName } = useParams();

    const [courseObj, setCourseObj] = useState<ICourseData | null>(null);
    const [routesArray, setRoutesArray] = useState<IRoutes[] | []>([]);
    const [title, setTitle] = useState("");

    let token: string | null;
    token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")!) : null;

    const [fetchSelectedCourse, { data }] = useFetchSelectedCourseMutation();


    useEffect(() => {
        courseShortName && fetchSelectedCourse({ courseShortName, token });
    }, [courseShortName]);

    useEffect(() => {
        data && setCourseObj(data);
        if (data) {
            setCourseObj(data);
            setTitle(data.name);
            setRoutesArray([{ name: data.categoryID.title, link: `/courses/${data.categoryID.name}` }]);
        }
    }, [data]);

    return (
        <div className="container">
            <CourseContextProvide value={{ courseObj: courseObj }}>
                <BreadCrumbs routesArray={routesArray} title={title} />
                <CourseExplanation />
                <CourseDetails />
            </CourseContextProvide>
        </div>
    );
};

export default Course;

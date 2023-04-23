import ICourseData from "../course-data";

interface IUserData {
    email: string,
    name: string,
    role: "USER" | "ADMIN",
    username: string,
    phone: string;
    notifications: string[];
    courses: ICourseData[];
    _id: string;
}

export default IUserData;
import IComment from "../comments";

interface ICourseData {
    categoryID: ICategoryID,
    courseAverageScore: number,
    courseStudentsCount: number;
    createdAt: number,
    comments: IComment[] | [];
    cover: string,
    creator: ICreator,
    description: string,
    isComplete: boolean,
    isUserRegisteredToThisCourse: boolean;
    name: string,
    title: string,
    price: number,
    registers: number,
    shortName: string,
    status: string,
    support: string,
    sessions: ISessions[] | [];
    updatedAt: string,
    _id: string,
    _v: number;
}

export interface ICategoryID {
    name: string,
    title: string,
    _id: string,
    updatedAt: string;
}

export interface ICreator {
    name: string,
    email: string,
    role: string,
}

export interface ISessions {
    updatedAt: string,
    free: boolean,
    title: string,
    video: string;
    time: string;
}

export default ICourseData;
interface ICourseData {
    categoryID: ICategoryID,
    courseAverageScore: number,
    courseStudentsCount: number;
    createdAt: number,
    comments: IComments[] | [];
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

export interface IComments {
    answer: number,
    answerContent: string | null,
    body: string,
    updatedAt: string;
    score: number,
    isAnswer: boolean,
    creator: ICreator;
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
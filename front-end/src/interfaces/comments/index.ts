import { ICreator } from "../course-data";

export default interface IComment {
    answer: number,
    answerContent: string | null,
    body: string | null;
    createdAt: string;
    creator: ICreator;
    isAnswer: boolean;
    score: number;
    _id: string;
}
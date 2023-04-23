import { useContext } from "react";

import "./index.css";
import CommentSection from "../../../../../components/comments";
import CourseContext from "../../../../../contexts/courseContext";

const Comments = () => {
    const courseContext = useContext(CourseContext);


    return (
        <div className="mx-2">
            <CommentSection comments={courseContext.courseObj?.comments} title={courseContext.courseObj?.name} />
        </div>
    );
};

export default Comments;

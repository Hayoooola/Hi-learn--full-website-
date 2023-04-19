import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ISearch from "../../../interfaces/search";

interface IProps {
    resultObj: ISearch | null;
    resetSearch: () => void;
}


const Results: FC<IProps> = ({ resultObj, resetSearch }) => {
    return (
        <div className="result-wrapper">
            <ul className="result-container">

                {resultObj?.allResultArticles.map((courseObj, index) => (
                    <li className="result-item" key={index}>
                        <Link to={`/article/${courseObj.shortName}`} className="result-link" onClick={resetSearch}>
                            {courseObj.title}
                        </Link>
                    </li>
                ))}


                {resultObj?.allResultCourses.map((courseObj, index) => (
                    <li className="result-item" key={index}>
                        <Link to={`/course/${courseObj.shortName}`} className="result-link" onClick={resetSearch}>
                            {courseObj.name}
                        </Link>
                    </li>
                ))}

                {resultObj?.allResultCourses.length === 0 && resultObj?.allResultArticles.length === 0 &&
                    <li className="result-not-found" >
                        موردی یافت نشد!
                    </li>
                }

            </ul>
        </div>
    );
};

export default Results;

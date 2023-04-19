import { useContext, useRef } from 'react';
import { TfiLink } from 'react-icons/tfi';
import { VscCopy } from 'react-icons/vsc';

import CourseContext from '../../../../../contexts/courseContext';

const ShortLink = () => {
    const courseContext = useContext(CourseContext);
    const courseObj = courseContext.courseObj;
    const courseLink = `hilearn.com/course/${courseObj && courseObj.shortName}`;

    const copyTextRef = useRef<HTMLSpanElement>(null);

    const copyLinkHandler = () => {
        navigator.clipboard.writeText(courseLink);
        copyTextRef.current?.classList.add("active");
    };

    return (
        <div className="course-details__side-bar__box">
            <div className="course-details__side-bar__short-link">
                <div className="d-flex mb-3">
                    <TfiLink size="1.6rem" />
                    <span className="px-2" >
                        لینک کوتاه
                    </span>
                </div>
                <div className="course-details__side-bar__short-link__link-wrapper">
                    <span onClick={copyLinkHandler}>{courseLink}</span>
                    <div className='d-flex'>
                        <VscCopy size="1.8rem" onClick={copyLinkHandler} />
                        <span className='course-details__side-bar__short-link__copy-text' ref={copyTextRef}>کپی شد!</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShortLink;

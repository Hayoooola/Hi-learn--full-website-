import { useContext } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "./index.css";
import SingleVideo from './single-video';
import CourseContext from '../../../../../contexts/courseContext';

const CourseVideos = () => {
    const courseContext = useContext(CourseContext);
    const courseSessionArray = courseContext.courseObj?.sessions || [];
    const isUserAccess = courseContext ? courseContext.courseObj?.isUserRegisteredToThisCourse : false;

    return (
        <div className="course-videos__container my-3">

            <div className='course-videos__accordion__container mx-2 mt-3'>
                <Accordion className='mb-2'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        {courseSessionArray.length > 0 ? "مشاهده جلسات دوره" : "ویدیویی برای نمایش وجود ندارد"}
                    </AccordionSummary>
                    <AccordionDetails>

                        {courseSessionArray.map((sessionObj, index) => (
                            <SingleVideo sessionObj={sessionObj} videoNumber={index + 1} isUserAccess={isUserAccess} key={index} />
                        ))}

                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
};

export default CourseVideos;

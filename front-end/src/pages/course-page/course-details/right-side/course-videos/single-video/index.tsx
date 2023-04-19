import { FC } from 'react';
import { ImPlay } from 'react-icons/im';
import { FaLock } from 'react-icons/fa';

import { ISessions } from '../../../../../../interfaces/course-data';

interface IProps {
    sessionObj: ISessions;
    videoNumber: number;
    isUserAccess: boolean | undefined;
}

const SingleVideo: FC<IProps> = ({ sessionObj, videoNumber, isUserAccess }) => {
    const access = isUserAccess || sessionObj.free;

    return (
        <div className="course-videos__accordion__content">
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex  align-items-center mb-3">
                    <span className='course-videos__accordion__video-number'>{videoNumber}</span>
                    <span className='course-videos__accordion__video-icon mx-2'>
                        <ImPlay size="1.4rem" />
                    </span>
                    <div className='course-videos__accordion__video-title'>

                        {access ?
                            <a href={`https://${sessionObj.video}`} target='_blank'> {sessionObj.title}</a> :
                            <span>{sessionObj.title}</span>
                        }

                    </div>
                </div>
                <div className='course-videos__accordion__video-time d-flex'>

                    <span className='mx-2 '>{sessionObj.time}</span>
                    {access ? null : <FaLock size="1.1rem" />}

                </div>
            </div>
        </div>
    );
};

export default SingleVideo;

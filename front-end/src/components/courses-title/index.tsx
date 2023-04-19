import "./index.css";

interface IProps {
    title: string,
    subtitle: string;
}

const CourseTitle = (props: IProps) => {
    return (
        <div className='course-title-wrapper'>

            <div className="course-title__title">
                <h3 className='h4'>{props.title}</h3>
            </div>

            <div className="course-title__subtitle me-2">
                <p className='h6'>{props.subtitle}</p>
            </div>

        </div>
    );
};

export default CourseTitle;

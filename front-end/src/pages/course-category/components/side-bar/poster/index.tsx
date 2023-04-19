const poster = require("../../../../../assets/images/other/poster.jpg");

const Poster = () => {
    return (
        <div className='course-details__side-bar__box d-flex justify-content-center'>
            <img src={poster} alt="hi-learn" className="side-bar-img" />
        </div>
    );
};

export default Poster;

import { IoIosArrowUp } from "react-icons/io";

import "./index.css";

const ArrowUpBtn = () => {
    const clickHandler = () => {
        window.scroll({ top: 0 });
    };

    return (
        <span className="arrow-up-btn d-none d-xl-block" onClick={clickHandler}>
            <IoIosArrowUp size="1.2rem" />
        </span>
    );
};

export default ArrowUpBtn;

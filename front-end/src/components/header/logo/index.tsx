import { Link } from "react-router-dom";

const logo = require("../../../assets/images/logo/hi-learn-main.png");

const LogoMain = () => {
    return (
        <Link to="/">
            <img src={logo} alt="های لرن" className="main-header__logo" />
        </Link>
    );
};

export default LogoMain;

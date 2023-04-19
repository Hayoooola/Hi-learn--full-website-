import "./index.css";
import DesktopMailHeader from "./desktop";
import MobileHeader from "./mobile";
import ArrowUpBtn from "./arrow-up-btn";

const MainHeader = () => {
    return (
        <div className='main-header  py-2'>
            <DesktopMailHeader />
            <MobileHeader />
            <ArrowUpBtn />
        </div>
    );
};

export default MainHeader;

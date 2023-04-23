import MenuList from "../../menu";
import LogoMain from "../../logo";
import UserInfoBtn from "../user-info-btn";
import SearchBtn from "../../../search";
import Cart from "../../../cart";


const DesktopMailHeader = () => {
    return (
        <div className="main-header__wrapper d-none d-xl-flex justify-content-between container">
            <div className="main-header__right d-flex align-items-center">

                <div className="main-header__image mx-5">
                    <LogoMain />
                </div>

                <div className="main-header__menu-section">
                    <div className="main-header__menu">
                        <div ><MenuList /></div>
                    </div>
                </div>

            </div>

            <div className="main-header__left d-flex align-items-center mx-2">
                <SearchBtn />

                <div className="main-header__user mx-2">
                    <UserInfoBtn />
                </div>

                <Cart />
            </div>
        </div>
    );
};

export default DesktopMailHeader;

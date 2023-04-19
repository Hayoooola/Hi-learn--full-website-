import { AiOutlineShopping } from "react-icons/ai";

import MenuList from "../../menu";
import LogoMain from "../../logo";
import UserInfoBtn from "../user-info-btn";
import SearchBtn from "../../../search";

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

                <div className="main-header__cart mx-2">
                    <div className="main-header__cart__cart-icon position-relative">
                        <AiOutlineShopping size="1.8rem" />
                        <span className="main-header__cart__cart-count">2</span>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default DesktopMailHeader;

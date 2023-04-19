import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { ImUser } from "react-icons/im";

import "./index.css";
import MenuList from "..";
import LogoMain from "../../logo";
import UserInfoBtn from "../../main-header/user-info-btn";
import SearchBtn from "../../../search";

const MobileMenu = () => {
    const menuRef = useRef<HTMLDivElement | null>(null);

    const openMobileMenu = () => {
        menuRef.current?.classList.add("show");
    };

    const closeMobileMenu = () => {
        menuRef.current?.classList.remove("show");
    };

    const closeMenuOnOtherSide = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        (e.target as HTMLDivElement).classList.contains("mobile-menu__container") && closeMobileMenu();
    };

    return (
        <div >
            <span className="mobile-menu__button mobile-menu__btn" onClick={openMobileMenu}><FiMenu size="1.4rem" /></span>

            <div className="mobile-menu__container" ref={menuRef} onClick={closeMenuOnOtherSide}>
                <div className="mobile-menu__wrapper" >
                    <span className="mobile-menu__close-btn mobile-menu__btn" onClick={closeMobileMenu}><FaTimes /></span>
                    <div className="mobile-menu__logo__container"><LogoMain /></div>
                    <div className="mobile-menu__menu-list"><MenuList /></div>

                    <div className="mobile-menu__user-info mt-5">
                        <div className="mobile-menu__user d-flex mx-2">
                            <UserInfoBtn />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MobileMenu;

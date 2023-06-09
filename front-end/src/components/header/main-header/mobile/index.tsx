import MobileMenu from "../../menu/mobile-menu";
import LogoMain from "../../logo"; import React from 'react';
import SearchBtn from "../../../search";
import Cart from "../../../cart";

const MobileHeader = () => {
    return (
        <div className="mobile-main-header container d-flex d-xl-none align-items-center justify-content-between px-3">
            <MobileMenu />
            <LogoMain />
            <div className="mx-2 d-flex align-items-center">
                <SearchBtn />
                <Cart />
            </div>
        </div>
    );
};

export default MobileHeader;

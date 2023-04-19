import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ImUser } from "react-icons/im";

import IUserInfo from "../../../../interfaces/user-info";
import "./index.css";
import UserMenu from "./user-menu";


const UserInfoBtn = () => {
    const [name, setName] = useState("ورود \ ثبت نام");

    const userInfo = useSelector((store: { userInfo: IUserInfo; }) => store.userInfo);

    useEffect(() => {
        userInfo.userData.name && setName(userInfo.userData.name);
    }, [userInfo]);



    return (
        <div className="main-header__user__info__wrapper">
            <Link to="/login">
                <div className="main-header__user__info d-flex justify-content-center mx-1">
                    <span className="mx-2">
                        {name}
                    </span>
                    <ImUser className="main-header__user__icon" size="1rem" />
                </div>
            </Link>

            {userInfo.isUserLogin && <div className="d-none d-xl-block"><UserMenu /></div>}
        </div>
    );
};

export default UserInfoBtn;

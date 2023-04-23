import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import "./index.css";
import { logOut } from "../../../../../features/userData";


const UserMenu = () => {
    const dispatch = useDispatch();

    const logOutHandler = () => {
        dispatch(logOut());
        toast.success("با موفقیت از حساب کاربری خود خارج شدید.");
    };

    return (
        <div className="user-menu__container">
            <li className="d-flex user-menu__wrapper">
                <ul>
                    <li className="main-header__user-menu__item">
                        <Link to="/my-account" className="main-header__user-menu__link">پیشخوان</Link>
                    </li>
                    <li className="main-header__user-menu__item">
                        <Link to="/my-account/setting" className="main-header__user-menu__link">جزئیات حساب</Link>
                    </li>
                    <li className="main-header__user-menu__item">
                        <Link to="/my-account/courses" className="main-header__user-menu__link">دوره های خریداری شده</Link>
                    </li>
                    <li className="main-header__user-menu__item">
                        <Link to="/" className="main-header__user-menu__link" onClick={logOutHandler}>خروج از حساب</Link>
                    </li>
                </ul>
            </li>
        </div>
    );
};

export default UserMenu;

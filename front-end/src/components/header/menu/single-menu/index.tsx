import { FC, useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import IMainMenu from "../../../../interfaces/menus/main-menu";
import { Link } from "react-router-dom";

interface IProps {
    menuObj: IMainMenu;
}

const SingleMenu: FC<IProps> = ({ menuObj }) => {
    const menuItem = useRef<HTMLLIElement | null>(null);

    const dropDownMenuHandler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        menuItem.current?.classList.contains("active") ?
            menuItem.current?.classList.remove("active") :
            menuItem.current?.classList.add("active");
    };

    const removeActiveMenuHandler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        window.innerWidth >= 1200 &&
            menuItem.current?.classList.contains("active") &&
            menuItem.current?.classList.remove("active");
    };

    if (menuObj.submenus.length > 0) {
        return (
            <li className="main-header__menu__item" ref={menuItem} onClick={dropDownMenuHandler} onMouseLeave={removeActiveMenuHandler}>
                <Link to={menuObj.href} className="main-header__menu__link">
                    <span>{menuObj.title}</span>
                    <span><MdOutlineKeyboardArrowDown size="1.2rem" /></span>
                </Link>

                <ul className="main-header__menu__item__dropdown-menu">
                    {menuObj.submenus.map((submenu, index) => (
                        <li className="main-header__menu__item__dropdown-item" key={index}>
                            <Link to={submenu.href} className="main-header__menu__dropdown-link">{submenu.title}</Link>
                        </li>
                    ))}
                </ul>
            </li>
        );
    } else {
        return (
            <li className="main-header__menu__item">
                <Link to={menuObj.href} className="main-header__menu__link">{menuObj.title}</Link>
            </li>
        );
    }

};

export default SingleMenu;

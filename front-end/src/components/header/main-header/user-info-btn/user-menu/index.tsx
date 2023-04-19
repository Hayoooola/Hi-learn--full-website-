import "./index.css";

const UserMenu = () => {
    return (
        <div className="user-menu__container">
            <li className="d-flex user-menu__wrapper">
                <ul>
                    <li className="main-header__user-menu__item">
                        <a href="" className="main-header__user-menu__link">پیشخوان</a>
                    </li>
                    <li className="main-header__user-menu__item">
                        <a href="" className="main-header__user-menu__link">سفارش ها</a>
                    </li>
                    <li className="main-header__user-menu__item">
                        <a href="" className="main-header__user-menu__link">کیف پول من</a>
                    </li>
                    <li className="main-header__user-menu__item">
                        <a href="" className="main-header__user-menu__link">جزئیات حساب</a>
                    </li>
                    <li className="main-header__user-menu__item">
                        <a href="" className="main-header__user-menu__link">دوره های خریداری شده</a>
                    </li>
                    <li className="main-header__user-menu__item">
                        <a href="" className="main-header__user-menu__link">تیکت های پشتیبانی</a>
                    </li>
                    <li className="main-header__user-menu__item">
                        <a href="" className="main-header__user-menu__link">خروج از سیستم</a>
                    </li>
                </ul>
            </li>
        </div>
    );
};

export default UserMenu;

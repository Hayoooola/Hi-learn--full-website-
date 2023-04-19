import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SiMaildotru } from "react-icons/si";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import "./index.css";
import { useFetchTopMenuQuery } from "../../../API/menusApi";
import ITopBarMenu from "../../../interfaces/menus/topbar-menu";


const TopHeader = () => {
    const { data } = useFetchTopMenuQuery();

    const [menuArray, setMenuArray] = useState<ITopBarMenu[] | []>([]);

    useEffect(() => {
        // pick the last 6 menu to show
        data &&
            setMenuArray(data.length > 6 ? data.slice(data.length - 6, data.length) : data);

    }, [data]);

    return (
        <div className='top-header '>
            <div className="top-header__wrapper  d-none d-lg-flex justify-content-between container-fluid mb-2">
                <div className='top-header__right'>
                    <ul className="top-header__menu d-flex">
                        {menuArray.map((menuObj, index) => (
                            <li className="top-header__menu__item mx-2" key={index}>
                                <Link to={menuObj.href} className="top-header__menu__link">{menuObj.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='top-header__left d-flex justify-content-between'>
                    <div className="top-header__contact-info d-none d-xl-flex justify-items-center mx-2">

                        <div className="email  mx-1 d-flex">
                            <div className="top-header__contact-info__content">
                                salar.atc1900@gmail.com
                            </div>
                            <div className="top-header__contact-info__icon mx-1"><SiMaildotru size="1.1rem" /></div>
                        </div>

                        <div className="phone mx-1">
                            <a href="tel:+989120179719" className="d-flex align-items-center">
                                <div className="top-header__contact-info__content">0179719_0912</div>
                                <div className="top-header__contact-info__icon mx-1"><FaPhoneSquareAlt size="1.2rem" /></div>
                            </a>
                        </div>

                    </div>

                    <div className="top-header__social-icons mx-2 d-none d-xl-flex">
                        <a href="https://instagram.com/salar_torabiii?igshid=YmMyMTA2M2Y=" className="top-header__social-icons__link" target="_blank">
                            <FaInstagram size="1.2rem" />
                        </a>
                        <a href="https://t.me/Salar_torabi" className="top-header__social-icons__link" target="_blank">
                            <FaTelegram size="1.2rem" />
                        </a>
                        <a href="https://www.linkedin.com/in/salar-torabi-5ab807228/" className="top-header__social-icons__link" target="_blank">
                            <FaLinkedin size="1.2rem" />
                        </a>
                        <a href="https://github.com/Hayoooola" className="top-header__social-icons__link" target="_blank">
                            <FaGithub size="1.2rem" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;

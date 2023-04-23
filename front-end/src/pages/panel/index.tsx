import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AiFillDashboard } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import { RxExit } from "react-icons/rx";

import "./index.css";
import { useGetUserInfoQuery } from "../../API/authApi";
import { loginSuccessful, logOut } from "../../features/userData";
import { PanelContextProvider } from "../../contexts/panelContext";
import Loading from "../../components/loading";
import IUserData from "../../interfaces/userData";
import IStore from "../../interfaces/store";



const Panel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userObj, setUserObj] = useState<IUserData | null>(null);
    const [loading, setLoading] = useState(false);

    const token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")!) : null;
    const userInfo = useSelector((store: IStore) => store.userInfo);

    const { data, isError, isLoading } = useGetUserInfoQuery(token);


    // prevent access for unAuthorized users
    useEffect(() => {
        token || rejectAccess();
        navigate("dashboard");
    }, []);


    // managing loading & userInfo status
    useEffect(() => {
        isLoading ? setLoading(true) : setLoading(false);

        data && dispatch(loginSuccessful(data));

        isError && rejectAccess();
    }, [data, isError, isLoading]);


    // update user data
    useEffect(() => {
        userInfo && setUserObj(userInfo.userData);
    }, [userInfo]);


    function logOutHandler() {
        dispatch(logOut());
        toast.success("با موفقیت از حساب کاربری خود خارج شدید.");
    };


    function rejectAccess() {
        navigate("/login");
        toast.error("برای مشاهده پنل کاربری ابتدا باید وارد حساب کاربری خود شوید!");
    }



    return (
        <div className="container">

            {loading ?

                <div className="panel-loading"><Loading /> </div> :
                <div className="panel-container row">

                    <div className="panel-menu col-12 col-lg-4 col-xl-3">
                        <ul className="panel-menu-list my-5">
                            <li className="panel-menu-item">
                                <Link to="dashboard"><AiFillDashboard size="1.4rem" />پیشخوان</Link>
                            </li>
                            <li className="panel-menu-item">
                                <Link to="setting"><AiFillSetting size="1.4rem" />جزئیات حساب</Link>
                            </li>
                            <li className="panel-menu-item">
                                <Link to="courses"><FaShoppingBag size="1.4rem" />دوره های خریداری شده</Link>
                            </li>
                            <li className="panel-menu-item">
                                <Link to="/" onClick={logOutHandler}><RxExit size="1.4rem" />خروج از سیستم</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="panel-body col-12 col-lg-8 col-xl-9">
                        <img src={require("../../assets/images/other/offer.png")} alt="offer" className="panel-offer" />
                        <PanelContextProvider value={{ userObj }}>
                            <Outlet />
                        </PanelContextProvider>
                    </div>
                </div>
            }

        </div>
    );
};


export default Panel;

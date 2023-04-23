import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CircularProgress, TextField } from "@mui/material";
import { FiLogIn } from "react-icons/fi";
import { GiCheckMark } from "react-icons/gi";

import "./index.css";
import { useLoginMutation } from "../../../API/authApi";

const LoginPage = () => {
    const [login, { data, isError, error, isLoading }] = useLoginMutation();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login({ username, password });
    };

    useEffect(() => {
        if (data) {
            localStorage.setItem("token", JSON.stringify(data.accessToken));
            toast.success("با موفقیت وارد شدید!");
            navigate("/");
        }
        if (error && "status" in error) {
            error.status === 401 ?
                toast.error('نام کاربری یا رمز عبور اشتباه است!') :
                toast.error("مشکلی در ارتباط با پایگاه داده رخ داده!");
        }
    }, [data, isError]);

    return (
        <div className="auth-container overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-12 col-lg-6">
                        <div className="auth__wrapper">
                            <p className="auth__title">
                                ورود به حساب کاربری
                            </p>
                            <p className="auth__subtitle">
                                {`خوشحالیم دوباره میبینیمت دوست عزیز :)`}                            </p>
                            <div className="auth-input__container my-2 mb-5">
                                <form className="auth-form" onSubmit={submitHandler}>
                                    <TextField
                                        required
                                        id="email"
                                        label="ایمیل یا شماره تماس"
                                        size="small"
                                        className="w-100 mb-3"
                                        autoComplete="true"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                    <TextField
                                        required
                                        id="password"
                                        type="password"
                                        label="رمز عبور"
                                        size="small"
                                        className="w-100 mb-3"
                                        autoComplete="true"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <div className="auth-submit-btn__wrapper">
                                        <button className="auth-submit-btn w-100 position-relative" >
                                            {isLoading ?
                                                <CircularProgress size="1.6rem" /> :
                                                <div>ورود</div>
                                            }
                                            <FiLogIn size="1.5rem" className="auth-submit-btn-__icon" />
                                        </button>
                                    </div>
                                    <div className="remember-me-wrapper d-flex justify-content-between mt-2">
                                        <div className="remember-me">
                                            <input type="checkbox" id="remember-me" className="mx-1" />
                                            <label htmlFor="remember-me">مرا به خاطر داشته باش</label>
                                        </div>
                                        <a href="#" className="forget-password">فراموشی رمز عبور</a>
                                    </div>
                                </form>
                                <div className="auth-redirect-section d-flex justify-content-center">
                                    <span>حساب کاربری ندارید؟</span>
                                    <Link to="/register"><span className="auth-redirect-btn">ثبت نام</span></Link>
                                </div>
                            </div>
                            <div className="auth-warning__wrapper">
                                <p className="auth-warning__title"> کاربر محترم:</p>
                                <div className="auth-warning">
                                    <GiCheckMark size=".9rem" className="auth-warning__icon" />
                                    <span className="auth-warning__text">
                                        لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس استفاده کنید.
                                    </span>
                                </div>
                                <div className="auth-warning">
                                    <GiCheckMark size=".9rem" className="auth-warning__icon" />
                                    <span className="auth-warning__text">
                                        ما هرگز اطلاعات محرمانه شما را از طریق ایمیل درخواست نمیکنیم.
                                    </span>
                                </div>
                                <div className="auth-warning">
                                    <GiCheckMark size=".9rem" className="auth-warning__icon" />
                                    <span className="auth-warning__text">
                                        لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

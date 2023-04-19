import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { CircularProgress, TextField } from "@mui/material";
import { FiLogIn } from "react-icons/fi";
import { GiCheckMark } from "react-icons/gi";

import "./index.css";
import { useGetUserInfoQuery, useRegisterMutation } from "../../../API/authApi";

const RegisterPage = () => {
    const [register, { data, isError, error, isLoading }] = useRegisterMutation();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        register({ name, email, phone, password });
    };

    useEffect(() => {
        if (data) {
            localStorage.setItem("token", JSON.stringify(data.accessToken));
            toast.success("ثبت نام با موفقیت انجام شد.");
            navigate("/login");
        }
        if (error && "status" in error) {
            error.status === 409 ?
                toast.error("کاربری با این نام کاربری وجود دارد!") :
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
                                ایجاد حساب کاربری جدید
                            </p>
                            <p className="auth__subtitle">
                                به خونواده های لرن خوش اومدی
                            </p>
                            <div className="auth-input__container my-2 mb-5">
                                <form className="auth-form" onSubmit={submitHandler}>
                                    <TextField
                                        required
                                        id="name"
                                        label="نام و نام خانوادگی"
                                        size="small"
                                        className="w-100 mb-3"
                                        autoComplete="true"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <TextField
                                        required
                                        id="email"
                                        label="ایمیل"
                                        type="email"
                                        size="small"
                                        className="w-100 mb-3"
                                        autoComplete="true"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <TextField
                                        required
                                        id="phone-number"
                                        type="number"
                                        label="شماره تماس"
                                        size="small"
                                        className="w-100 mb-3"
                                        autoComplete="true"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                    <TextField
                                        required
                                        id="password"
                                        type="password"
                                        label="رمز عبور"
                                        size="small"
                                        className="w-100 mb-3"
                                        autoComplete="false"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <div className="auth-submit-btn__wrapper">
                                        <button className="auth-submit-btn w-100 position-relative" >
                                            {isLoading ?
                                                <CircularProgress size="1.6rem" /> :
                                                <div>ثبت نام</div>
                                            }
                                            <FiLogIn size="1.5rem" className="auth-submit-btn-__icon" />
                                        </button>
                                    </div>
                                    <div className="remember-me-wrapper mt-2">
                                        <input type="checkbox" id="remember-me" className="mx-1" />
                                        <label htmlFor="remember-me">مرا به خاطر داشته باش</label>
                                    </div>
                                </form>
                                <div className="auth-redirect-section d-flex justify-content-center">
                                    <span>حساب کاربری دارید؟</span>
                                    <Link to="/login"><span className="auth-redirect-btn">ورود</span></Link>
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

export default RegisterPage;

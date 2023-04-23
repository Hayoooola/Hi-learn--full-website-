import { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { TextField, ThemeProvider, createTheme } from "@mui/material";

import "./index.css";
import PanelContext from "../../../../contexts/panelContext";
import { useLoginMutation, useUpdateUserInfoMutation } from "../../../../API/authApi";
import Loading from "../../../../components/loading";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


const Account = () => {
    const panelContext = useContext(PanelContext);
    const userObj = panelContext.userObj;

    const [login, { data: checkPassData, isError: checkPassIsError, error: checkPassError, isLoading: checkPassLoading }] = useLoginMutation();
    const [updateUserInfo, { data, isError, isLoading, error }] = useUpdateUserInfoMutation();

    const formRef = useRef<HTMLFormElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const oldPassRef = useRef<HTMLInputElement>(null);
    const newPassRef = useRef<HTMLInputElement>(null);
    const repeatPassRef = useRef<HTMLInputElement>(null);

    const [loading, setLoading] = useState(true);
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [userName, setUserName] = useState<string>("");
    const [oldPass, setOldPass] = useState<string>("");
    const [newPass, setNewPass] = useState<string>("");
    const [repeatPass, setRepeatPass] = useState<string>("");
    const [oldPassError, setOldPassError] = useState(false);
    const [newPassError, setNewPassError] = useState(false);
    const [repeatPassError, setRepeatPassError] = useState(false);

    useEffect(() => {
        if (userObj?._id) {
            setLoading(false);
            setName(userObj.name);
            setPhone(userObj.phone);
            setEmail(userObj.email);
            setUserName(userObj.username);
        }
    }, [userObj]);


    const validator = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (newPass !== repeatPass) {
            setNewPassError(true);
            setRepeatPassError(true);
            toast.error("رمز عبور و تکرار رمز عبور باید یکسان باشند!");
        } else if (newPass !== "" && newPass === oldPass) {
            toast.warning("رمز عبور جدید شما همان رمز عبور عبور قبلی است! لطفا رمز جدیدی انتخاب کنید.");
            setOldPassError(true);
            setNewPassError(true);
            setRepeatPassError(true);
        } else if (newPass !== "") {
            setNewPassError(false);
            setRepeatPassError(false);
            if (oldPass === "") {
                toast.error("رمز عبور فعلی را وارد کنید!");
                setOldPassError(true);
            } else {
                setOldPassError(false);
                checkOldPass();
            }
        } else {
            submitHandler();
            setOldPassError(false);
            setNewPassError(false);
            setRepeatPassError(false);
        }
    };

    const checkOldPass = () => {
        login({ username: userName, password: oldPass });
    };

    useEffect(() => {
        checkPassLoading && setLoading(true);

        if (checkPassIsError) {
            setLoading(false);

            if (checkPassError && "status" in checkPassError) {
                if (checkPassError.status === 401) {
                    toast.error("رمز عبور فعلی خود را نادرست وارد کردید!");
                    setOldPassError(true);
                } else {
                    toast.error("مشکلی در ارتباط با پایگاه داده به وجود آمده!");
                }
            }
        }

        if (checkPassData) {
            setLoading(false);
            setOldPassError(false);
            submitHandler();
        }
    }, [checkPassData, checkPassIsError, checkPassLoading]);

    const submitHandler = () => {
        const token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token") || "") : "";

        updateUserInfo({ name, username: userName, email, password: newPass, phone, token });
    };

    useEffect(() => {
        isLoading && setLoading(true);

        if (isError) {
            setLoading(false);
            if (error && "message" in error) {
                toast.error(error.message);
            }
        }

        if (data) {
            setLoading(false);
            toast.success("اطلاعات با موفقیت ویرایش شدند.");
        }
    }, [data, isError, error, isLoading]);


    const itemToShow = () => {
        if (loading) {
            return <Loading />;
        } else if (userObj?._id) {
            return (
                <div className="panel-account mt-5">
                    <form ref={formRef} onSubmit={validator}>
                        <ThemeProvider theme={darkTheme}>
                            <TextField
                                ref={nameRef}
                                label="نام و نام خانوادگی"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                className="w-100 mb-3"
                                autoComplete="true"
                                required
                            />

                            <TextField
                                ref={phoneRef}
                                label="شماره موبایل"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                className="w-100 mb-3"
                                autoComplete="true"
                                required
                            />

                            <TextField
                                ref={emailRef}
                                label="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                type="email"
                                className="w-100 mb-3"
                                autoComplete="true"
                                required
                            />

                            <p className="text-warning mt-5">*به دلایل امنیتی تغییر نام کاربری ممکن نیست!</p>
                            <TextField
                                InputProps={{
                                    readOnly: true,
                                }}
                                label="نام کاربری"
                                value={userObj?.username}
                                className="w-100 mb-3"
                            />

                            <p className="text-warning mt-5">تغییر رمز عبور</p>

                            <TextField
                                ref={oldPassRef}
                                label="رمز عبور فعلی"
                                type="password"
                                className="w-100 mb-2"
                                value={oldPass}
                                onChange={e => setOldPass(e.target.value)}
                                autoComplete="false"
                                error={oldPassError}
                            />
                            <TextField
                                ref={newPassRef}
                                label="رمز عبور جدید"
                                type="password"
                                className="w-100 mb-2"
                                value={newPass}
                                onChange={e => setNewPass(e.target.value)}
                                autoComplete="false"
                                error={newPassError}
                            />
                            <TextField
                                ref={repeatPassRef}
                                label="تکرار عبور عبور"
                                type="password"
                                value={repeatPass}
                                onChange={e => setRepeatPass(e.target.value)}
                                className="w-100 mb-2"
                                autoComplete="false"
                                error={repeatPassError}
                            />
                        </ThemeProvider>
                        <input type="submit" className="panel-account__submit-btn mt-3" value="ذخیره تغییرات" />
                    </form>
                </div>);
        } else {
            return null;
        }
    };


    return itemToShow();
};

export default Account;

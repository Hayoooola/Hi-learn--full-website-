import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useGetUserInfoQuery } from "../API/authApi";
import { loginSuccessful } from "../features/userData";
import Header from "./header";
import Footer from "./footer";
import HomePage from "../pages/home-page";
import CourseCategory from "../pages/course-category";
import CourseDetails from "../pages/course-page";
import Article from "../pages/article";
import LoginPage from "../pages/register-login/login";
import RegisterPage from "../pages/register-login/register";
import ScrollToTop from "./scroll-to-top";
import Articles from "../pages/articles";
import CartPage from "../pages/cart";
import Panel from "../pages/panel";
import Dashboard from "../pages/panel/pages/dashboard";
import Account from "../pages/panel/pages/account";
import UserCourses from "../pages/panel/pages/courses";
import Page404 from "../pages/404/404";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token") || "") : null;

  const { data, isError } = useGetUserInfoQuery(token);

  useEffect(() => {
    isError && toast.warning("ارتباط با پایگاه داده برقرار نشد!");

    data && dispatch(loginSuccessful(data));
  }, [data, isError]);

  return (
    <BrowserRouter>
      <ToastContainer theme="dark" draggable={false} rtl pauseOnHover closeOnClick autoClose={5000} />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<CourseCategory />} path="/courses/:courseCategory" />
        <Route element={<CourseCategory />} path="/courses/:courseCategory/:order" />
        <Route element={<CourseCategory />} path="/courses/:courseCategory/page/:pageNumber" />
        <Route element={<CourseCategory />} path="/courses/:courseCategory/:order/page/:pageNumber" />
        <Route element={<CourseDetails />} path="/course/:courseShortName" />
        <Route element={<Article />} path="/article/:shortName" />
        <Route element={<Articles />} path="/articles" />
        <Route element={<Articles />} path="/articles/page/:pageNumber" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegisterPage />} path="/register" />
        <Route element={<CartPage />} path="/cart" />
        <Route element={<Panel />} path="/my-account" >
          <Route element={<Dashboard />} path="dashboard" />
          <Route element={<Account />} path="setting" />
          <Route element={<UserCourses />} path="courses" />
        </Route>
        <Route element={<Page404 />} path="*" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

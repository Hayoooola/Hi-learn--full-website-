import { useEffect, useState } from "react";
import { useFetchMainMenuQuery } from "../../../API/menusApi";
import "./index.css";
import SingleMene from "./single-menu";
import IMainMenu from "../../../interfaces/menus/main-menu";

// const menuArray = [
//     {
//         name: "فرانت اند", link: "#", subMenu: [
//             { name: "آموزش HTML", link: "#" },
//             { name: "آموزش CSS", link: "#" },
//             { name: "آموزش Flex box", link: "#" },
//             { name: "آموزش CSS Grid", link: "#" },
//             { name: "آموزش Emmet", link: "#" },
//             { name: "آموزش طراحی قالب", link: "#" },
//             { name: "آموزش جاوا اسکریپت", link: "#" },
//             { name: "آموزش بوت استرپ", link: "#" },
//             { name: "آموزش جامع ری اکت", link: "#" },
//             { name: "آموزش vue js", link: "#" },
//             { name: "آموزش VS code", link: "#" },
//             { name: "آموزش NPM", link: "#" },
//         ]
//     },
//     {
//         name: 'امنیت', link: "#", subMenu: [
//             { name: "نقشه راه ورود به دنیای امنیت", link: "#" },
//             { name: "شبکه با گرایش امنیت", link: "#" },
//             { name: "لینوکس با گرایش امنیت", link: "#" },
//             { name: "آموزش هکر قانونمند", link: "#" },
//             { name: "آموزش کالی لینوکس", link: "#" },
//             { name: "آموزش پایتون سیاه", link: "#" },
//             { name: "آموزش جاوا اسکریپت سیاه", link: "#" },
//             { name: "", link: "#" },
//         ]
//     },
//     {
//         name: 'مقالات', link: "#", subMenu: [
//             { name: "اچ تی ام ال", link: "#" },
//             { name: "بوت استرپ", link: "#" },
//             { name: "پروژه های برنامه نویسی", link: "#" },
//             { name: "تست نفوذ و امنیت وب", link: "#" },
//             { name: "جی سان", link: "#" },
//             { name: "ری اکت جی اس", link: "#" },
//             { name: "شروع برنامه نویسی", link: "#" },
//             { name: "طراحی سایت", link: "#" },
//         ]
//     },
//     {
//         name: 'پایتون', link: "#", subMenu: [
//             { name: "دوره آموزش پایتون", link: "#" },
//             { name: "پروژه های کاربردی با پایتون", link: "#" },
//             { name: "ترفندهای کاربردی پایتون", link: "#" },
//             { name: "متخصص جنگو", link: "#" },
//             { name: "مصورسازی داده با پایتون", link: "#" },
//         ]
//     },
//     { name: 'مهارت های نرم', link: "#" },
//     { name: "فروشگاه", link: "#" },
// ];


const MenuList = () => {
    const { data } = useFetchMainMenuQuery();

    const [menuArray, setMenuArray] = useState<IMainMenu[] | []>([]);

    useEffect(() => {
        data && setMenuArray(data);
    }, [data]);

    return (
        <ul className="d-flex menu__wrapper">
            {menuArray.map((menuObj, index) => (
                <SingleMene menuObj={menuObj} key={index} />
            ))}
        </ul>
    );

};

export default MenuList;

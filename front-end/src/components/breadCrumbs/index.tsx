import { Link } from "react-router-dom";
import { Breadcrumbs } from "@mui/material";
import { FaHome } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import "./index.css";
import IRoutes from "../../interfaces/routes";
import { FC } from "react";

interface IProps {
    routesArray?: IRoutes[] | [];
    title: string;
}

const BreadCrumbs: FC<IProps> = ({ routesArray, title }) => {
    return (
        <div className="breadcrumbs-container container d-flex align-items-center mt-3 mb-5 p-3">
            <div className="breadcrumbs__home-icon mx-2">
                <Link to="/"><FaHome size="1.4rem" /></Link>
            </div>

            <Breadcrumbs aria-label="breadcrumb" separator={<MdOutlineKeyboardArrowLeft size="1.2rem" />}>
                <Link to="/">
                    خانه
                </Link>

                {routesArray && routesArray.map((routeObj, index) => (
                    <Link to={routeObj.link} key={index}>
                        {routeObj.name}
                    </Link>
                ))}

                <span className="breadcrumbs__course-name">
                    {title}
                </span>
            </Breadcrumbs>
        </div>
    );
};

export default BreadCrumbs;


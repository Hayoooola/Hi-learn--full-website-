import { FC, useEffect, useState } from "react";
import { Alert, AlertTitle } from "@mui/material";
import { Link } from "react-router-dom";

import "./index.css";
import ICourseData from "../../interfaces/course-data";

interface IpProps {
    activePage: number,
    itemsPerPage: number;
    allItems: ICourseData[] | [];
    baseUrl: string;
    itemsToShow: (allItems: ICourseData[] | []) => void;
}

const Pagination: FC<IpProps> = ({ activePage, itemsPerPage, allItems, baseUrl, itemsToShow }) => {
    const [numbersToShow, setNumbersToShow] = useState<number[]>([]);
    const [courseArrayLength, setCourseArrayLength] = useState<number>(0);
    const [CurrentPage, setCurrentPage] = useState(activePage);
    const [isPageInvalid, setIsPageInvalid] = useState(false);
    const [isDataToShow, setIsDataToShow] = useState(true);


    useEffect(() => {
        setCourseArrayLength(allItems.length);
        prepareItemsToShow(CurrentPage);
    }, [allItems, activePage]);


    useEffect(() => {
        setCurrentPage(activePage);
        prepareItemsToShow(activePage);
    }, [activePage, baseUrl]);


    useEffect(() => {
        const pages = courseArrayLength ? Math.ceil(courseArrayLength / itemsPerPage) : 1;
        activePage > pages ? setIsPageInvalid(true) : setIsPageInvalid(false);

        let newNumbers: number[] = [];
        for (let i = 1; i <= pages; i++) {
            newNumbers = [...newNumbers, i];
        }

        setNumbersToShow(newNumbers);
        courseArrayLength === 0 ? setIsDataToShow(false) : setIsDataToShow(true);
    }, [courseArrayLength, activePage]);


    const prepareItemsToShow = (page: number) => {
        itemsToShow(allItems.slice((page - 1) * itemsPerPage, page * itemsPerPage));
    };


    return (
        <div className="container my-5">

            {isPageInvalid &&
                <div className="mx-2 mb-5">
                    <Alert severity="warning">
                        <AlertTitle>خطا!</AlertTitle>
                        شماره صفحه وارد شده نامعتبر است! — <strong>لطفا یکی از صفحات زیر را انتخاب کنید</strong>
                    </Alert>
                </div>
            }

            <div className="pagination__wrapper d-flex justify-content-center">

                {isDataToShow ?
                    numbersToShow.map((number, index) => (
                        <Link to={`${baseUrl}/page/${number}`} key={index} >
                            <div className={`course__page ${number === CurrentPage && "active"}`}>{number}</div>
                        </Link>
                    )) :
                    <Alert severity="error" className="w-50">
                        <AlertTitle>خطا!</AlertTitle>
                        متاسفانه موردی با این مشخصات پیدا نشد!
                    </Alert>
                }

            </div>
        </div>
    );
};

export default Pagination;

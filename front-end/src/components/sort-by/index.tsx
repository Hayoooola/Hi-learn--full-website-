import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ThemeProvider } from '@emotion/react';

import "./index.css";
import ICourseData from '../../interfaces/course-data';


enum FilterByValues {
    DEFAULT = "default",
    NAME = "name",
    POPULAR = "popularity",
    PRICE = "price",
    PRICE_DECS = "price-decs",
    DATE = "date"
}

const orderArray = [
    "مرتب سازی پیش فرض",
    "مرتب سازی بر اساس نام",
    "مرتب سازی بر اساس محبوبیت",
    "مرتب سازی بر اساس قیمت (ارزان به گران)",
    "مرتب سازی بر اساس قیمت (گران به ارزان)",
    "مرتب سازی بر اساس جدیدترین",
];


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});


interface IProps {
    courseArray: ICourseData[] | [];
    setCourseArray: (newCourseArray: ICourseData[] | []) => void,
    baseUrl: string;
    order?: string;
    activePage: number;
    coursePerPage: number;
}



const SortBy: FC<IProps> = ({ courseArray, setCourseArray, baseUrl, order, activePage, coursePerPage }) => {
    const [filterText, setFilterText] = useState<string>("");
    const [resultCount, setResultCount] = useState("");
    const [isPageValid, setIsPageValid] = useState(true);

    const navigate = useNavigate();


    const handleChange = (event: SelectChangeEvent<typeof filterText>) => {
        const selectedValue = event.target.value;
        setFilterText(selectedValue);

        selectedValue === orderArray[0] && navigate(`${baseUrl}/orderby=${FilterByValues.DEFAULT}`);
        selectedValue === orderArray[1] && navigate(`${baseUrl}/orderby=${FilterByValues.NAME}`);
        selectedValue === orderArray[2] && navigate(`${baseUrl}/orderby=${FilterByValues.DATE}`);
        selectedValue === orderArray[3] && navigate(`${baseUrl}/orderby=${FilterByValues.PRICE}`);
        selectedValue === orderArray[4] && navigate(`${baseUrl}/orderby=${FilterByValues.PRICE_DECS}`);
        selectedValue === orderArray[5] && navigate(`${baseUrl}/orderby=${FilterByValues.POPULAR}`);
    };


    useEffect(() => {
        if (order) {
            switch (order) {
                case FilterByValues.DEFAULT:
                    setFilterText(orderArray[0]);
                    return setCourseArray(courseArray);

                case FilterByValues.NAME:
                    setFilterText(orderArray[1]);
                    return filterByNameHandler();

                case FilterByValues.DATE:
                    setFilterText(orderArray[2]);
                    return filterByDATEHandler();

                case FilterByValues.PRICE:
                    setFilterText(orderArray[3]);
                    return filterByPriceHandler();

                case FilterByValues.PRICE_DECS:
                    setFilterText(orderArray[4]);
                    return filterByPriceDecsHandler();

                case FilterByValues.POPULAR:
                    setFilterText(orderArray[5]);
                    return filterByPopularHandler();

                default:
                    return setCourseArray([]);
            }
        }
    }, [baseUrl, order,]);


    useEffect(() => {
        updateResultCount();
        courseArray.length === 0 ? setIsPageValid(false) : setIsPageValid(true);
    }, [courseArray, activePage]);



    const filterByNameHandler = () => {
        const newArray = [...courseArray];
        setCourseArray(newArray.sort((a, b) => a.name.localeCompare(b.name)));
    };

    const filterByDATEHandler = () => {
        setCourseArray([...courseArray].reverse());
    };

    const filterByPriceHandler = () => {
        const newArray = [...courseArray];
        setCourseArray(newArray.sort((a, b) => b.price - a.price).reverse());
    };

    const filterByPriceDecsHandler = () => {
        const newArray = [...courseArray];
        setCourseArray(newArray.sort((a, b) => b.price - a.price));
    };

    const filterByPopularHandler = () => {
        const newArray = [...courseArray];
        setCourseArray(newArray.sort((a, b) => b.courseAverageScore - a.courseAverageScore));
    };

    const updateResultCount = () => {
        if (courseArray.length) {
            const firstItem = (activePage - 1) * coursePerPage + 1;

            const latestItem = courseArray.length > activePage * coursePerPage ?
                activePage * coursePerPage :
                courseArray.length;

            const totalResult = courseArray.length;

            setResultCount(`نمایش ${firstItem} - ${latestItem} از ${totalResult}  نتیجه`);

            totalResult >= firstItem ? setIsPageValid(true) : setIsPageValid(false);
        }
    };



    return (
        <div >

            {isPageValid &&
                <div className='d-flex justify-content-between'>
                    <ThemeProvider theme={darkTheme}>
                        <FormControl sx={{ m: 1, minWidth: 300 }}>
                            <InputLabel >مرتب سازی</InputLabel>
                            <Select
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                value={filterText}
                                onChange={handleChange}
                                input={<OutlinedInput label="مرتب سازی" />}
                            >
                                {orderArray.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </ThemeProvider>

                    <div className='mt-3'>
                        {courseArray.length && resultCount}
                    </div>
                </div>
            }

        </div>
    );
};

export default SortBy;
import { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";

import "./index.css";
import { useFetchSearchResultQuery } from "../../API/search";
import Results from "./results";
import ISearch from "../../interfaces/search";
import { CircularProgress } from "@mui/material";


const SearchBtn = () => {
    const [searchedText, setSearchedText] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [resultData, setResultData] = useState<ISearch | null>(null);
    const [isOpenResultBox, setIsOpenResultBox] = useState(false);
    const [loading, setLoading] = useState(false);
    const [skipSearch, setSkipSearch] = useState(true);

    const { data, isFetching } = useFetchSearchResultQuery(searchedText, { skip: skipSearch });

    const searchRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);


    useEffect(() => {
        searchedText.length > 2 ? setSkipSearch(false) : setSkipSearch(true);
    }, [searchedText]);

    useEffect(() => {
        isFetching ? setLoading(true) : setLoading(false);

        if (data) {
            setResultData(data);
            setIsOpenResultBox(true);
        } else {
            setIsOpenResultBox(false);
        }
    }, [data, isFetching]);


    const openSearchBox = () => {
        searchRef.current?.classList.contains("active") ?
            searchRef.current?.classList.remove("active") :
            searchRef.current?.classList.add("active");
    };

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        const newInput = e.target.value;

        // set search request with 1s forwarding user type
        setTimeout(() => {
            newInput === e.target.value && setSearchedText(newInput.trim());
        }, 1000);
    };

    const resetSearch = () => {
        setInputValue("");
        setIsOpenResultBox(false);
        setResultData(null);
        searchRef.current?.classList.remove("active");
    };


    return (
        < div className="search-section position-relative" ref={searchRef}>

            <div className="search-section-wrapper">
                <input type="text" className="search-section__input" ref={inputRef} value={inputValue} onChange={changeHandler} placeholder="جستجو کنید..." />
                <div className="search-loading">

                    {loading && <CircularProgress />}
                    {resultData && !loading && <AiFillCloseCircle onClick={resetSearch} />}

                </div>
            </div>
            <span className="search-section__icon" onClick={openSearchBox}>
                <FiSearch size="1.2rem" fontWeight="bold" />
            </span>

            {isOpenResultBox && <Results resultObj={resultData} resetSearch={resetSearch} />}
        </div>
    );
};

export default SearchBtn;

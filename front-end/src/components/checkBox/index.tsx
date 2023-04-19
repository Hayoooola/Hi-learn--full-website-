import { FC, useEffect, useState } from "react";
import "./index.css";

interface IProps {
    name: string,
    value: string,
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox: FC<IProps> = ({ name, value, checked, onChange }) => {
    return (
        <div className="course-category__filter-item mb-2">
            {checked ?
                <input type="checkbox" id={name} value={value} className="custom-checkbox" onChange={onChange} checked /> :
                <input type="checkbox" id={name} value={value} className="custom-checkbox" onChange={onChange} checked={false} />
            }
            <label htmlFor={name} className="mx-2">{name}</label>
        </div>
    );
};

export default CheckBox;

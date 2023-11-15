import React from 'react';
import { useState, useEffect } from 'react';

export default function Filter(props) {

    const defaultVal = props.defaultVal
    const options = props.options
    const onSelect = props.onSelect;
    const shouldReset = props.shouldReset;


    const [selectedValue, setSelectedValue] = useState(defaultVal);

    useEffect(() => {
        if (shouldReset) {
            setSelectedValue(defaultVal);
        }
    }, [shouldReset, defaultVal]);

    const handleSelectChange = (event) => {
        const selectedOption = event.target.value;
        setSelectedValue(selectedOption);
        onSelect(selectedOption);
    };


    return (
        <select 
            value={selectedValue}
            onChange={handleSelectChange} 
            className="max-[450px]:text-xs px-1 py-1 text-base text-center border-4 border-indigo-500 rounded-full appearance-none cursor-pointer md:text-base md:px-4 md:py-2 w-fit"
        >
            <option value={defaultVal}>{defaultVal}</option>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
                ))}
        </select>
    )
}
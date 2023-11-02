import React from "react";

export default function Filter(props) {

    const defaultVal = props.defaultVal
    const options = props.options
    const onSelect = props.onSelect;

    const handleSelectChange = (event) => {
        onSelect(event.target.value);
    };

    return (
        <select onChange={handleSelectChange} className="px-1 py-1 mr-2 text-sm text-center border-4 border-indigo-500 rounded-full appearance-none cursor-pointer md:text-base md:px-4 md:py-2 w-fit md:mr-7">
            <option value={defaultVal}>{defaultVal}</option>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
                ))}
        </select>
    )
}
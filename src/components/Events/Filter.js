import React from "react";

export default function Filter(props) {

    const defaultVal = props.defaultVal
    const options = props.options
    const onSelect = props.onSelect;

    const handleSelectChange = (event) => {
        onSelect(event.target.value);
    };

    return (
        <select onChange={handleSelectChange} className="text-sm md:text-base px-1 py-1 md:px-4 md:py-2 text-center border-4 border-indigo-500 rounded-full appearance-none cursor-pointer w-fit mr-2 md:mr-7">
            <option value={defaultVal}>{defaultVal}</option>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
                ))}
        </select>
    )
}
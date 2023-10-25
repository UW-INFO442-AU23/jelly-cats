import React, { useEffect, useState } from "react";
import arrow from '../../imgs/Events/Arrow.png'
import './Filter.css';

export default function Filter(props) {

    const filterBy = props.filterBy
    const options = props.options

    return (
        <select id="{filterBy}" class="px-4 py-2 border-4 border-indigo-500 rounded-full cursor-pointer mr-7 w-44
        appearance-none">
            <option selected>{filterBy}</option>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
                ))}
        </select>

    )
}
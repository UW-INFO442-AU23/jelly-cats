import React, { useEffect, useState } from "react";
import arrow from '../../imgs/Events/Arrow.png'
import './Filter.css';

export default function Filter(props) {

    const defaultVal = props.defaultVal
    const options = props.options

    return (
<<<<<<< HEAD
        <select id="{defaultVal}" className="px-4 py-2 text-center border-4 border-indigo-500 rounded-full appearance-none cursor-pointer w-fit mr-7">
=======
        <select id="{defaultVal}" className="px-6 py-2 text-center border-4 border-indigo-500 rounded-full appearance-none cursor-pointer mr-7">
>>>>>>> 8960f4b869fe6d9a62d230a1d153282391e1bd98
            <option selected>{defaultVal}</option>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
                ))}
        </select>

    )
}
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Breadcrumbs.css'

export default function Breadcrumbs() {
    const location = useLocation();

    let currentLink = '';

    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map((crumb, index, array) => {
            currentLink += `/${crumb}`
            const isLastCrumb = index === array.length - 1;
            return (
                <div className={`text-sm crumb sm:text-md md:text-lg ${isLastCrumb ? "last-crumb" : ""}`} key={crumb}>
                    <Link to={currentLink}>{crumb.replace('%20', ' ')}</Link>
                </div>
            )
        })

    return (
        <div className='mt-20 ml-6 sm:ml-12 md:ml-40 breadcrumbs'>{crumbs}</div>
    )
}
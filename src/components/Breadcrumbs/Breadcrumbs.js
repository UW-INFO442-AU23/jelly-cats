import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Breadcrumbs.css'

export default function Breadcrumbs() {
    const location = useLocation();

    let currentLink = '';

    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink += `/${crumb}`
            return (
                <div className="crumb" key={crumb}>
                    <Link to={currentLink}>{crumb.replace('%20', ' ')}</Link>
                </div>
            )
        })

    return (
        <div className='mt-20 md:ml-60 breadcrumbs'>{crumbs}</div>
    )
}
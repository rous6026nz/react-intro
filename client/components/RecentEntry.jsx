import React from 'react'

const RecentEntry = (props) => {
    return (
        <li className="recent-entry">
            <a href={props.data.link}>
                <h3 className="post-title">{props.data.name}</h3>
            </a>
        </li>
    )
}

export default RecentEntry
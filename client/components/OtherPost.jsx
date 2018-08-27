import React from 'react'

const OtherPost = (props) => {
    return (
        <li className="other-post">
            <a href={props.data.link}>
                <h3 className="post-title">{props.data.blogTitle}</h3>
            </a>
        </li>
    )
}

export default OtherPost
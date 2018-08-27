import React from 'react'

const Post = (props) => {
    return (
        <li className="post">
            <h3 className="post-title">{props.data.title}</h3>
            <span className="post-date"><em>{props.data.date}</em></span>
            {
                props.data.paragraphs.map((text, i) => {
                    return <p key={i}>{text}</p>
                })
            }
            <hr/>
            <p className="comment-count">Comments: {props.data.commentCount}</p>
        </li>
    )
}

export default Post
import React from 'react'

import Post from './Post'

const Posts = (props) => {
    return (
        <div className="posts-container">
            <h2 className="section-heading">Posts</h2>
            <ul>
                {
                    props.data.map((post, i) => {
                        return <Post data={post} key={i} />
                    })
                }
            </ul>
        </div>
    )
}

export default Posts
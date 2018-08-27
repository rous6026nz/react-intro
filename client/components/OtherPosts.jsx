import React from 'react'

import OtherPost from './OtherPost'

const OtherPosts = (props) => {
    return (
        <div className="other-posts-container">
            <h2 className="section-heading">Other Blogs</h2>
            <ul>
            {
                props.data.map((post, i) => {
                    return <OtherPost data={post} key={i} />
                })
            }
            </ul>
        </div>
    )
}

export default OtherPosts
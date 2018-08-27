import React from 'react'

import RecentEntry from './RecentEntry'

const RecentEntries = (props) => {
    return (
        <div className="recent-posts-container">
            <h2 className="section-heading">Recent Entries</h2>
            <ul>
                {
                    props.data.map((entry, i) => {
                        return <RecentEntry data={entry} key={i} />
                    })
                }
            </ul>
        </div>
    )
}

export default RecentEntries
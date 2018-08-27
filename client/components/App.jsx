import React from 'react'

// Data Imports
import dataHeader from '../../data/header'
import dataFooter from '../../data/footer'
import dataOtherPosts from '../../data/other-blogs'
import dataPosts from '../../data/posts'
import dataRecentEntries from '../../data/recent-entries'

// Component Imports
import Header from '../components/Header'
import Footer from '../components/Footer'
import OtherPosts from '../components/OtherPosts'
import Posts from '../components/Posts'
import RecentEntries from '../components/RecentEntries'

const App = (props) => {
    return (
        <div>
            <Header data={dataHeader} />
            <div class="wrapper">
                <OtherPosts data={dataOtherPosts} />
                <Posts data={dataPosts} />
                <RecentEntries data={dataRecentEntries} />
            </div>
            <Footer data={dataFooter} />
        </div>
    )
}

export default App
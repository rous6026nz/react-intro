import React from 'react'

const Header = (props) => {
    return (
        <header>
            <a href={props.data.link}>
                <img src="images/charlottes-web.png" alt={props.data.title} className="logo"/>
            </a>
        </header>
    )
}

export default Header
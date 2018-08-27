import React from 'react'

const Footer = (props) => {
    return (
        <footer>
            <p className="copyright">&copy; Copyright {props.data.author} {props.data.copyright}</p>
        </footer>
    )
}

export default Footer
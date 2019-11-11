import React from 'react'

import { Link } from 'gatsby'
import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <Link to="/" className="image avatar"><img src={avatar} alt="" /></Link>
                    <h1><strong>I am Shunya</strong>, it's my portfolio site.<br />
                    It contains my blog.<br />
                    </h1>
                    <div className="mx-auto">
                        <span><Link activeStyle={{display:"none"}} to="/index-en">TO ENGLISH</Link></span>     
                    </div>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header

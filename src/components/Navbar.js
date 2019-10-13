import React, {Component} from 'react'

function Navbar () {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-primary bg-dark justify-content-center">
                        <img src={process.env.PUBLIC_URL + '/images/pokeball.png'} width="40" height="40"></img>
                        <a className="text-white h1 ml-3 mr-3" href="/">Pokemon App</a>
                        <img src={process.env.PUBLIC_URL + '/images/pokeball.png'} width="40" height="40"></img>
                </nav>
            </div>
        )
}

export default Navbar

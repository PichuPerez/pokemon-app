import React, {Component} from 'react'

class Navbar extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
                        <a className="text-white h1" href="/">Pokemon App</a>
                </nav>
            </div>
        )
    }
}

export default Navbar

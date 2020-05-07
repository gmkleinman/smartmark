import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
    constructor(props){
        super(props)
    }

    loginRender() {
        return(
            this.props.currentUser ? (
                <span id='nav-left-container' className='nav-container'>
                    <span className='greeting-text'>Hi, {this.props.currentUser.username}</span>
                    <button id='logout' onClick={this.props.logout}>LOG OUT</button>
                </span>
            ) : (
                <span id='nav-right-container' className='nav-container'>
                    <span>
                        <Link className="greeting-text" to="/signup">SIGN UP</Link>
                    </span>
                    <span>
                         <Link className="greeting-text" to="/signin">SIGN IN</Link>
                    </span>    
                 </span>
            )
        )
    }

    render() {
        return(
            <div>
                <div className='nav-bar'>
                    <span id='nav-left-container' className='nav-container'>

                    </span>
                    <span id='nav-mid-container' className='nav-container'>
                        <Link className="home-text" to="/">S M A R T M A R K</Link>
                    </span>
                    {this.loginRender()}
                </div>
                <div className='links-bar'>
                
                </div>
            </div>
        )
    }
}

export default NavBar;
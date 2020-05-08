import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
    constructor(props){
        super(props)
    }

    loginRender() {
        return(
            this.props.currentUser ? (
                <span id='nav-right-loggedin' className='nav-container'>
                    <div className='spacing-placeholder'></div>
                    <div className="dropdown">
                    <img className='avatar' src={window.avatar}/>
                        <div className="dropdown-content">
                            <button className='greeting-text' onClick={this.props.logout}>Sign Out</button>
                        </div>
                    </div>
                    
                </span>
            ) : (
                <span id='nav-right-loggedout' className='nav-container'>
                    <div className='spacing-placeholder'></div>
                    <div className='spacing-placeholder'></div>
                    
                    <span className='greeting-spacer'>
                        <Link className="greeting-text" to="/signup">SIGN UP</Link>
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
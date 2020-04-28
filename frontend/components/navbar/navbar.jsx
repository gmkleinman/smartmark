import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
    constructor(props){
        super(props)
    }

    loginRender() {
        return(
            this.props.currentUser ? (
                <div className='greeting'>
                    <p>Hello, {this.props.currentUser.username}!</p>
                    <button onClick={this.props.logout}>Log Out</button>
                </div>
            ) : (
                <div className='greeting'>
                    <p>
                        <Link className="button" to="/signup">Sign Up</Link><br />
                    </p>
                    <p>
                         <Link className="button" to="/signin">Sign In</Link><br />
                    </p>        
                 </div>
            )
        )
    }

    render() {
        console.log('Navbar renders!')
        return(
            <div className='nav-bar'>
                <Link className="button" to="/"><h1>SmartMark</h1></Link>
                {this.loginRender()}
            </div>
        )
    }
}

export default NavBar;
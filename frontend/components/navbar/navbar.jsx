import React from 'react'
import { Link } from 'react-router-dom'

// class NavBar extends React.Component {
//     constructor(props){
//         super(props)
//     }
const NavBar = ({ currentUser, logout }) => {

    const display = currentUser ? (
            <div>
                <p>Hello, {currentUser.username}!</p>
                <button onClick={logout}>Log Out</button>
            </div>
        ) : (
            <div>
                <p>(INSERT LOGIN FORM HERE) <Link className="button" to="/login">Log In</Link> </p>
                <p>Don't have an account? <Link className="button" to="/signup">Sign Up</Link></p>
                <p>or (USE DEMO ACCOUNT)</p>
            </div>
        );

        console.log('Navbar renders!')
        return(
            <div className='nav-bar'>
                --NavBar Start--
                <h1>SmartMark</h1>
                {display}
                --NavBar End--
            </div>
        )
}

export default NavBar;
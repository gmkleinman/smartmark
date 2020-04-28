import React from 'react'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state);
    }

    display() {
        return(
        this.props.currentUser ? (
                <div>
                    <p>Hello, {this.props.currentUser.username}!</p>
                    <button onClick={this.props.logout}>Log Out</button>
                </div>
            ) : (
                <div>

                    <form>
                    <label>Username:
                        <input 
                        type="text" 
                        value={this.state.username}
                        onChange={this.update('username')}
                        />
                    </label>
                    <label>Password:
                        <input 
                        type="text" 
                        value={this.state.password}
                        onChange={this.update('password')}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Login</button>
                </form>
                <button>(USE DEMO ACCOUNT)</button>

                    <p>Don't have an account? <Link className="button" to="/signup">Sign Up</Link></p>
                </div>
            )
        )
    }

    render() {
        console.log('Navbar renders!')
        return(
            <div className='nav-bar'>
                --NavBar Start--
                <h1>SmartMark</h1>
                {this.display()}
                --NavBar End--
            </div>
        )
    }
}

export default NavBar;
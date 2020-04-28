import React from 'react'
import { Link } from 'react-router-dom'

class SignIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
    }

    componentDidMount() {
        this.props.clearSessionErrors()
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

    handleDemoSubmit(e) {
        e.preventDefault();
        let user = {
            username: 'CaptainFalcon',
            password: 'password'
        }     
        this.props.login(user);
    }

    loginForm() {
        return(
            <form>
                <ul className='errors'>
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}> {error} </li>
                    ))}
                </ul>
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
        )
    }

    loginRender() {
        return(
            this.props.currentUser ? (
                <div>
                    THIS IS THE SIGN IN FORM, BUT THE USER IS LOGGED IN. IT SHOULD REDIRECT.
                </div>
            ) : (
                <div>
                    {this.loginForm()}
                    <button onClick={this.handleDemoSubmit}>Sign is as Demo User</button>
                    <p>Don't have an account? <Link className="button" to="/signup">Sign Up</Link></p>
                </div>
            )
        )
    }

    render(){
        return(
            <div>
                {this.loginRender()}
            </div>
        )
    }
}

export default SignIn;
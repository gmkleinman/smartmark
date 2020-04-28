import React from 'react'
import { Link } from 'react-router-dom'

class SignUp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
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
        this.props.signup(this.state);
    }

    signupForm() {
        return(
            <form>
                <ul className='errors'>
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}> {error} </li>
                    ))}
                </ul>
                
                <label>Username <br />
                    <input 
                    type="text" 
                    value={this.state.username}
                    onChange={this.update('username')}
                    /><br />
                </label>
                <label>Email <br />
                    <input 
                    type="text" 
                    value={this.state.email}
                    onChange={this.update('email')}
                    /><br />
                </label>
                <label>Password <br />
                    <input 
                    type="text" 
                    value={this.state.password}
                    onChange={this.update('password')}
                    /><br />
                </label>
                <button onClick={this.handleSubmit}>Create Account</button>
            </form>
        )
    }

    signupRender() {
        return(
            this.props.currentUser ? (
                <div>
                    THIS IS THE SIGN UP FORM, BUT THE USER IS LOGGED IN. IT SHOULD REDIRECT.
                </div>
            ) : (
                <div>
                    {this.signupForm()}
                    <p>Already have an account? <Link className="button" to="/signin">Sign in here.</Link></p>
                </div>
            )
        )
    }

    render(){
        return(
            <div>
                {this.signupRender()}
            </div>
        )
    }
}

export default SignUp;
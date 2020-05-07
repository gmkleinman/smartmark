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


    render(){
        return(
            <div id="form-page">
                <h2 className='auth-header'>Sign Up</h2> 
                <div className='auth-container'>

                    <form className='auth-form'>
                        
                        {this.props.errors.length !== 0 ? (
                            <ul className='errors'>
                                {this.props.errors.map((error, i) => (
                                    <li key={`error-${i}`}>{error} </li>
                                ))}
                            </ul>
                        ) : (
                            []
                        )}

                        
                        <label className='form-field'>Username<br/>
                            <input 
                            type="text" 
                            value={this.state.username}
                            onChange={this.update('username')}
                            />
                        </label>

                        <label className='form-field'>Email<br/>
                            <input 
                            type="text" 
                            value={this.state.email}
                            onChange={this.update('email')}
                            />
                        </label>

                        <label className='form-field'>Password <br/>
                            <input 
                            type="text" 
                            value={this.state.password}
                            onChange={this.update('password')}
                            />
                        </label>
                        
                        <button className='button' onClick={this.handleSubmit}>Create Account</button>
                    </form> <br/>
                </div>
                <span className='redirect-text'>Already have an account? <Link className='link' to="/signin">Sign in here.</Link></span>
            </div>
        )
    }
}

export default SignUp;
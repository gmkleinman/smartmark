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
            username: 'EnderWiggin',
            password: 'password'
        }     
        this.props.login(user);
    }

    render(){
        return(
            <div id="form-page">
                <h2 className='auth-header'>Sign In</h2>
                <div className='auth-container'>

                    <form className='auth-form'>

                    {this.props.errors.length !== 0 ? (
                        <ul className='errors'>
                            {this.props.errors.map((error, i) => (
                                <li key={`error-${i}`}> {error} </li>
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

                        <label className='form-field'>Password<br/>
                            <input 
                            type="password" 
                            value={this.state.password}
                            onChange={this.update('password')}
                            />
                        </label>

                        <button className='button' onClick={this.handleSubmit}>Login</button>
                    </form>

                    <button className='button' onClick={this.handleDemoSubmit}>Demo Login</button> <br/>
                </div>
                <span className='redirect-text'>Don't have an account? <Link className='link' to="/signup">Sign up here.</Link></span>
            </div>
        )
    }
}

export default SignIn;
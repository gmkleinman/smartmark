import React from 'react'
import { Link } from 'react-router-dom'

class RequireLogin extends React.Component {
    constructor(props){
        super(props)
    }

    render() {

        return(
            <div className='annotation-show-container'>
                You must be signed in to create annotations!<br /><br />
                <Link to='/signin'>
                    <button id='anno-button'>Sign In</button>
                </Link>
                <Link to='/signup'>
                    <button id='anno-button'>Sign Up</button>
                </Link>
            </div>
        )
    }
}

export default RequireLogin
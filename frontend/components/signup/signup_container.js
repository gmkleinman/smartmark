import { connect } from 'react'
import SignUp from './signup'
import { logout, login } from '../../actions/session_actions'

const mSTP = state => {
    return({
        currentUser: state.entities.users[state.session.id]
        //this whole function is a placeholder
    }) 
}

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    login: user => dispatch(login(user))
    //this whole function is a placeholder
})

export default connect(mSTP, mDTP)(SignUp);
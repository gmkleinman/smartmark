import { connect } from 'react-redux'
import SignUp from './signup'
import { signup, clearSessionErrors } from '../../actions/session_actions'
import { closeModal } from '../../actions/modal_actions'

const mSTP = state => {
    return({
        errors: state.errors.session,
    }) 
}

const mDTP = dispatch => ({
    signup: user => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    closeModal: () => dispatch(closeModal()),
})

export default connect(mSTP, mDTP)(SignUp);
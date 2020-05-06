import { connect } from 'react-redux'
import SignIn from './signin'
import { login, clearSessionErrors } from '../../actions/session_actions'

import {openModal} from '../../actions/modal_actions'


const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.session,
})

const mDTP = dispatch => ({
    login: user => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    openModal: modal => dispatch(openModal(modal)),
    
})

export default connect(mSTP, mDTP)(SignIn);
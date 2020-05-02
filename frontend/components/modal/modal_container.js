import { connect } from 'react-redux'
import Modal from './modal'
import { closeModal } from '../../actions/modal_actions'

const mSTP = (state, {passageId}) => {
    // debugger
    return({
        modal: state.ui.modal,
        passageId
    })
}

const mDTP = dispatch => {
    return ({
        closeModal: () => dispatch(closeModal())
    })
}

export default connect(mSTP, mDTP)(Modal);
import { connect } from 'react-redux'
import { closeModal } from '../../actions/modal_actions'
import RequireLogin from './require_login'

const mDTP = dispatch => {
    return ({
        closeModal: () => dispatch(closeModal()),
    })
}

export default connect(null, mDTP)(RequireLogin);
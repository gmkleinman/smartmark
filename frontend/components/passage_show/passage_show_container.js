import { connect } from 'react-redux'
import PassageShow from './passage_show'
import { fetchPassage, fetchPassages } from '../../actions/passage_actions'
import { fetchAnnotations } from '../../actions/annotation_actions'
import { selectAnnotationsByPassageId } from '../../reducers/selectors'
import { openModal, closeModal } from '../../actions/modal_actions'

const mSTP = (state, ownProps) => {
    return(
        {
            passage: state.entities.passages[ownProps.match.params.passageId],
            annotations: selectAnnotationsByPassageId(state, parseInt(ownProps.match.params.passageId)),
            currentUser: state.entities.users[state.session.id],
        }
    )
}

const mDTP = dispatch => {
    return {
        fetchPassage: passageId => dispatch(fetchPassage(passageId)),
        fetchPassages: () => dispatch(fetchPassages()),
        fetchAnnotations: () => dispatch(fetchAnnotations()),
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
    }
}

export default connect(mSTP, mDTP)(PassageShow);
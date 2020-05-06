import { connect } from 'react-redux'
import PassageShow from './passage_show'
import { fetchPassage, fetchPassages } from '../../actions/passage_actions'
// import { openShowAnnotation } from '../../actions/modal_actions'
import { fetchAnnotations } from '../../actions/annotation_actions'
import { selectAnnotationsByPassageId } from '../../reducers/selectors'
// import { openNewAnnotation } from '../../actions/anno_modal_actions'
import { openModal } from '../../actions/modal_actions'
import { fetchAnnotation } from '../../util/annotation_api_util'

const mSTP = (state, ownProps) => {
    // debugger
    return(
        {
            passage: state.entities.passages[ownProps.match.params.passageId],
            annotations: selectAnnotationsByPassageId(state, parseInt(ownProps.match.params.passageId)),
            currentUser: state.entities.users[state.session.id],
        }
    )
}

const mDTP = dispatch => {
    // debugger    
    return {
        fetchPassage: passageId => dispatch(fetchPassage(passageId)),
        fetchPassages: () => dispatch(fetchPassages()),
        fetchAnnotations: () => dispatch(fetchAnnotations()),
        // openShowAnnotation: passageId => dispatch(openShowAnnotation(passageId)),
        // openNewAnnotation: () => dispatch(openNewAnnotation()),
        openModal: modal => dispatch(openModal(modal)),
    }
}

export default connect(mSTP, mDTP)(PassageShow);
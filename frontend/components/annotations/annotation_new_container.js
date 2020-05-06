import { connect } from 'react-redux'
import AnnotationNew from './annotation_new'
import { createAnnotation } from '../../actions/annotation_actions'
import { closeModal } from '../../actions/modal_actions'

//import openAnnotationNew to passage_show

const mSTP = (state, ownProps) => {
    // debugger
    return({
        currentUser: state.entities.users[state.session.id],
        passageId: ownProps.passageId,
        startIdx: ownProps.startIdx,
        endIdx: ownProps.endIdx,
    })
}

const mDTP = dispatch => {
    return ({
        closeModal: () => dispatch(closeModal()),
        createAnnotation: annotation => dispatch(createAnnotation(annotation)),
    })
}

export default connect(mSTP, mDTP)(AnnotationNew);
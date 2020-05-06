import { connect } from 'react-redux'
import AnnotationNew from './annotation_new'
import { closeNewAnnotation } from '../../actions/anno_modal_actions'
import { createAnnotation } from '../../actions/annotation_actions'

//import openAnnotationNew to passage_show

const mSTP = (state, ownProps) => {
    // debugger
    return({
        annoModal: state.ui.annoModal,
        currentUser: state.entities.users[state.session.id],
        passageId: ownProps.passageId,
        startIdx: ownProps.startIdx,
        endIdx: ownProps.endIdx,
    })
}

const mDTP = dispatch => {
    return ({
        closeNewAnnotation: () => dispatch(closeNewAnnotation()),
        createAnnotation: annotation => dispatch(createAnnotation(annotation)),
    })
}

export default connect(mSTP, mDTP)(AnnotationNew);
import { connect } from 'react-redux'
import AnnotationShow from './annotation_show'
import { fetchAnnotation, fetchAnnotations } from '../../actions/annotation_actions'
import { selectAnnotationsByPassageId } from '../../reducers/selectors'
import { closeModal } from '../../actions/modal_actions'

const mSTP = (state, ownProps) => {
    // debugger
    // console.log("this is annotations:")
    // console.log(state)
    // console.log(ownProps.passageId)
    // console.log(typeof ownProps.passageId)
    // console.log(selectAnnotationsByPassageId(state, ownProps.passageId))
    return(
        {
            annotations: selectAnnotationsByPassageId(state, ownProps.passageId),
            annotationId: state.ui.modal,   
            // annotation: state.entities.annotations[state.ui.modal]
        }
    )
}


const mDTP = dispatch => ({
    fetchAnnotation: annotationId => dispatch(fetchAnnotation(annotationId)),
    fetchAnnotations: () => dispatch(fetchAnnotations()),
    closeModal: () => dispatch(closeModal()),
})

export default connect(mSTP, mDTP)(AnnotationShow);
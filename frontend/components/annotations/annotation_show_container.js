import { connect } from 'react-redux'
import AnnotationShow from './annotation_show'
import { fetchAnnotation, fetchAnnotations } from '../../actions/annotation_actions'
import { selectAnnotationsByPassageId } from '../../reducers/selectors'
import { closeModal } from '../../actions/modal_actions'

const mSTP = (state, ownProps) => {
    // debugger

    let annotationId = state.ui.modal;
    let annotations = selectAnnotationsByPassageId(state, ownProps.passageId);
    let annotation = Object.values(annotations).find(annotation => annotation.id === annotationId);

    return(
        {
            annotation: annotation
            // annotations: selectAnnotationsByPassageId(state, ownProps.passageId),
            // annotationId: state.ui.modal,
        }
    )
}


const mDTP = dispatch => ({
    fetchAnnotation: annotationId => dispatch(fetchAnnotation(annotationId)),
    fetchAnnotations: () => dispatch(fetchAnnotations()),
    closeModal: () => dispatch(closeModal()),
})

export default connect(mSTP, mDTP)(AnnotationShow);
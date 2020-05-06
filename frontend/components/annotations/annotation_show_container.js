import { connect } from 'react-redux'
import AnnotationShow from './annotation_show'
import { fetchAnnotation, fetchAnnotations, updateAnnotation, deleteAnnotation } from '../../actions/annotation_actions'
import { selectAnnotationsByPassageId } from '../../reducers/selectors'
import { closeModal } from '../../actions/modal_actions'


const mSTP = (state, ownProps) => {
    // debugger
    let annotationId = ownProps.annotationId;
    let annotation;
    let annotations;
    
    if (typeof annotationId === 'number') {
        annotations = selectAnnotationsByPassageId(state, ownProps.passageId);
        annotation = Object.values(annotations).find(annotation => annotation.id === annotationId);
    }

    return(
        {
            annotation: annotation,
            currentUser: state.entities.users[state.session.id],
        }
    )
}


const mDTP = dispatch => ({
    fetchAnnotation: annotationId => dispatch(fetchAnnotation(annotationId)),
    fetchAnnotations: () => dispatch(fetchAnnotations()),
    closeModal: () => dispatch(closeModal()),
    deleteAnnotation: annotationId => dispatch(deleteAnnotation(annotationId)),
    updateAnnotation: annotationId => dispatch(updateAnnotation(annotationId)),
})

export default connect(mSTP, mDTP)(AnnotationShow);
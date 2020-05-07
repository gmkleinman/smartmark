import { connect } from 'react-redux'
import AnnotationShow from './annotation_show'
import { fetchAnnotation, fetchAnnotations, deleteAnnotation } from '../../actions/annotation_actions'
import { selectAnnotationsByPassageId } from '../../reducers/selectors'
import { closeModal, openModal } from '../../actions/modal_actions'


const mSTP = (state, ownProps) => {
    let annotationId = ownProps.annotationId;
    let annotation;
    let annotations;
    
    
    if (typeof annotationId === 'number') {
        annotations = selectAnnotationsByPassageId(state, ownProps.passageId);
        annotation = Object.values(annotations).find(annotation => annotation.id === annotationId);
    }

    // debugger
    return(
        {
            annotation: annotation,
            currentUser: state.entities.users[state.session.id],
            // users: state.users[annotation.id]
        }
    )
}


const mDTP = dispatch => ({
    fetchAnnotation: annotationId => dispatch(fetchAnnotation(annotationId)),
    fetchAnnotations: () => dispatch(fetchAnnotations()),
    closeModal: () => dispatch(closeModal()),
    openModal: type => dispatch(openModal(type)),
    deleteAnnotation: annotationId => dispatch(deleteAnnotation(annotationId)),
})

export default connect(mSTP, mDTP)(AnnotationShow);
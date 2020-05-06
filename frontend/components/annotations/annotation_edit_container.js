import { connect } from 'react-redux'
import AnnotationEdit from './annotation_edit'
import { updateAnnotation, fetchAnnotation } from '../../actions/annotation_actions'
import { closeModal } from '../../actions/modal_actions'
import { selectAnnotationsByPassageId } from '../../reducers/selectors'


const mSTP = (state, ownProps) => {
    // debugger
    // const banana = ownProps.annotationId;
    let annotation;
    let annotations;
    
    if (typeof ownProps.annotationId === 'number') {
        annotations = selectAnnotationsByPassageId(state, ownProps.passageId);
        annotation = Object.values(annotations).find(annotation => annotation.id === ownProps.annotationId);
    }

    return(
        {
            annotation: annotation,
            currentUser: state.entities.users[state.session.id],
        }
    )
}

const mDTP = dispatch => {
    return ({
        closeModal: () => dispatch(closeModal()),
        updateAnnotation: annotationId => dispatch(updateAnnotation(annotationId)),
        fetchAnnotation: annotationId => dispatch(fetchAnnotation(annotationId)),
    })
}

export default connect(mSTP, mDTP)(AnnotationEdit);
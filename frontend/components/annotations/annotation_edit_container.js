import { connect } from 'react-redux'
import AnnotationEdit from './annotation_edit'
import { updateAnnotation } from '../../actions/annotation_actions'
import { closeModal } from '../../actions/modal_actions'
import { selectAnnotationsByPassageId } from '../../reducers/selectors'


const mSTP = (state, ownProps) => {
    return({    
        annotationId: ownProps.annotationId,
    })
    // let annotationId = ownProps.annotationId;
    // let annotation;
    // let annotations;
    
    // if (typeof annotationId === 'number') {
    //     annotations = selectAnnotationsByPassageId(state, ownProps.passageId);
    //     annotation = Object.values(annotations).find(annotation => annotation.id === annotationId);
    // }

    // return(
    //     {
    //         annotation: annotation,
    //         currentUser: state.entities.users[state.session.id],
    //     }
    // )
}

const mDTP = dispatch => {
    return ({
        closeModal: () => dispatch(closeModal()),
        updateAnnotation: annotationId => dispatch(updateAnnotation(annotationId)),

    })
}

export default connect(mSTP, mDTP)(AnnotationEdit);
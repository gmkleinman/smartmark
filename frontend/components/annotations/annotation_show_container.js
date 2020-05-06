import { connect } from 'react-redux'
import AnnotationShow from './annotation_show'
import { fetchAnnotation, fetchAnnotations } from '../../actions/annotation_actions'
import { selectAnnotationsByPassageId } from '../../reducers/selectors'
import { closeNewAnnotation } from '../../actions/anno_modal_actions'

const mSTP = (state, ownProps) => {
    debugger
    let annotationId = ownProps.annotationId;
    let annotation;
    let annotations;
    
    if (typeof annotationId === 'number') {
        annotations = selectAnnotationsByPassageId(state, ownProps.passageId);
        annotation = Object.values(annotations).find(annotation => annotation.id === annotationId);
    }

    return(
        {
            annotation: annotation
        }
    )
}


const mDTP = dispatch => ({
    fetchAnnotation: annotationId => dispatch(fetchAnnotation(annotationId)),
    fetchAnnotations: () => dispatch(fetchAnnotations()),
    closeNewAnnotation: () => dispatch(closeNewAnnotation()),
})

export default connect(mSTP, mDTP)(AnnotationShow);
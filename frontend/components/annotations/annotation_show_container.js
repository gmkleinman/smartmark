import { connect } from 'react-redux'
import AnnotationShow from './annotation_show'
import { fetchAnnotation, fetchAnnotations } from '../../actions/annotation_actions'
import { selectAnnotationsByPassageId } from '../../reducers/selectors'
import { closeModal } from '../../actions/modal_actions'

const mSTP = (state, ownProps) => {
    // debugger
    return(
        {
            annotations: selectAnnotationsByPassageId(state, ownProps.passageId),
            modal: state.ui.modal,
            
        }
    )
}


const mDTP = dispatch => ({
    fetchAnnotation: annotationId => dispatch(fetchAnnotation(annotationId)),
    fetchAnnotations: () => dispatch(fetchAnnotations()),
    closeModal: () => dispatch(closeModal()),
})

export default connect(mSTP, mDTP)(AnnotationShow);
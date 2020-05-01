import { connect } from 'react-redux'
import AnnotationShow from './annotation_show'
import { fetchAnnotation, fetchAnnotations } from '../../actions/annotation_actions'
import { selectAnnotationsByPassageId } from '../../reducers/selectors'

const mSTP = (state, ownProps) => {
    // debugger
    return(
        {
            annotations: selectAnnotationsByPassageId(state, ownProps.passageId)
        }
    )
}


const mDTP = dispatch => ({
    fetchAnnotation: annotationId => dispatch(fetchAnnotation(annotationId)),
    fetchAnnotations: () => dispatch(fetchAnnotations()),
})

export default connect(mSTP, mDTP)(AnnotationShow);
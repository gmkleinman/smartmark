import { connect } from 'react-redux'
import AnnotationShow from './annotation_show'
import { fetchAnnotation, fetchAnnotations, deleteAnnotation } from '../../actions/annotation_actions'
import { createLike, deleteLike, fetchLikes } from '../../actions/like_actions'
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

    return(
        {
            annotation: annotation,
            currentUser: state.entities.users[state.session.id],
            users: state.users,
            likes: state.entities.likes,
        }
    )
}


const mDTP = dispatch => ({
    fetchAnnotation: annotationId => dispatch(fetchAnnotation(annotationId)),
    fetchAnnotations: () => dispatch(fetchAnnotations()),
    closeModal: () => dispatch(closeModal()),
    openModal: type => dispatch(openModal(type)),
    deleteAnnotation: annotationId => dispatch(deleteAnnotation(annotationId)),
    createLike: like => dispatch(createLike(like)),
    deleteLike: likeId => dispatch(deleteLike(likeId)),
    fetchLikes: () => dispatch(fetchLikes()),
})

export default connect(mSTP, mDTP)(AnnotationShow);
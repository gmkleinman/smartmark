import { connect } from 'react-redux'
import CommentNew from './comment_new'
import { createComment } from '../../actions/comment_actions'

const mSTP = (state, ownProps) => {
    return({
        currentUser: state.entities.users[state.session.id],
        passageId: ownProps.passageId
    })
}

const mDTP = dispatch => {
    return ({
        createComment: comment => dispatch(createComment(comment)),
        deleteComment: commentId => dispatch(deleteComment(commentId)),
        updateComment: commentId => dispatch(updateComment(commentId)),
    })
}

export default connect(mSTP, mDTP)(CommentNew);
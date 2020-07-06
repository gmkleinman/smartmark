import { connect } from 'react-redux'
import CommentShow from './comment_show'
import { fetchComment, fetchComments, deleteComment } from '../../actions/comment_actions'
import { selectCommentsByPassageId } from '../../reducers/selectors'
import { fetchUsers } from '../../actions/user_actions'


const mSTP = (state, ownProps) => {
    let commentId = ownProps.commentId;
    let comment;
    let comments;
    
    if (typeof commentId === 'number') {
        comments = selectCommentsByPassageId(state, ownProps.passageId);
        comment = Object.values(comments).find(comment => comment.id === commentId);
    }

    return(
        {
            comment: comment,
            currentUser: state.entities.users[state.session.id],
            users: state.users
        }
    )
}


const mDTP = dispatch => ({
    fetchComment: commentId => dispatch(fetchComment(commentId)),
    fetchComments: () => dispatch(fetchComments()),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    fetchUsers: () => dispatch(fetchUsers()),
})

export default connect(mSTP, mDTP)(CommentShow);
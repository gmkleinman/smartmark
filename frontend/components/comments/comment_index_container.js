import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchComments, deleteComment, updateComment } from '../../actions/comment_actions';
import { selectCommentsByPassageId } from '../../reducers/selectors'
import { fetchUsers } from '../../actions/user_actions'



const mSTP = (state, ownProps) => {
    return(
        {
            comments: selectCommentsByPassageId(state, parseInt(ownProps.passageId)),
            passageId: ownProps.passageId,
            currentUser: state.entities.users[state.session.id],
            users: state.users,
        }
    )
}

const mDTP = dispatch => ({
    fetchComments: () => dispatch(fetchComments()),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    updateComment: commentId => dispatch(updateComment(commentId)),
    fetchUsers: () => dispatch(fetchUsers()),


})

export default connect(mSTP, mDTP)(CommentIndex);
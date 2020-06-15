import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchComments } from '../../actions/comment_actions';

const mSTP = state => {
    debugger
    return(
        {
            comments: Object.values(state.entities.comments),
        }
    )
}

const mDTP = dispatch => ({
    fetchComments: () => dispatch(fetchComments()),
})

export default connect(mSTP, mDTP)(CommentIndex);
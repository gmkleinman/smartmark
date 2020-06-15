import React from 'react'
import { fetchUser } from '../../actions/user_actions';

class CommentShow extends React.Component {
    constructor(props){
        super(props)
    }

    handleDeleteClick(){
        this.props.deleteComment(this.props.annotation.id)
    }

    handleUpdateClick() {
        // this.props.method for editing
    }

    addOwnerButtons() {
        if(!this.props.currentUser) return null;
        if(this.props.currentUser.id === this.props.comment.commenter_id) {
            return(
                <div>
                    <button id='anno-button' onClick={() => this.handleUpdateClick()}>
                        <span>Edit</span>
                    </button>
                    <button id='anno-button' onClick={() => this.handleDeleteClick()}>
                        <span>Delete</span>
                    </button>
                </div>
            )
        }
        return null;
    }

    render() {
        if(!this.props.comment) return null;
        return(
            <div className='comment-show-container'>
                <span className='annotator'>{this.props.users[this.props.comment.commenter_id].username}:</span><br />
                <div className='comment'>
                    {this.props.comment.body}
                </div>
                {this.addOwnerButtons()}
            </div>
        )
    }
}

export default CommentShow;
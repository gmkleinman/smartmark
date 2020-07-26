import React from 'react'
import { Link } from 'react-router-dom'

class CommentIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchComments();
        this.props.fetchUsers();
    }

    handleDeleteClick(){
        this.props.deleteComment(this.props.comment.id)
    }

    handleUpdateClick() {
        this.props.updateComment(this.props.comment.id)
    }

    addOwnerButtons(commenter_id, comment_id) {
        if(!this.props.currentUser) return null;
        if(this.props.currentUser.id === commenter_id) {
            return(
                <div>
                    {/* <button id='anno-button' onClick={() => this.props.updateComment(comment_id)}>
                        <span>Edit</span>
                    </button> */}
                    <button id='anno-button' onClick={() => this.props.deleteComment(comment_id)}>
                        <span>Delete</span>
                    </button>
                </div>
            )
        }
        return null;
    }

    addAnnotator(commenter_id) {
        if(commenter_id) return commenter_id.username
        return null
    }

    render() {
        if(!this.props.users) return null
        if(!this.props.comments) return null
        return(
            <div>
                <div className='comment-index-container'>
                    <div>
                        {this.props.comments.map((comment, i) => (
                            <div className='comment-line-item' key={comment.id}>
                                {/* <span className='index-item-title'>{this.props.users[comment.commenter_id].username}:</span><br/><br/>
                                <span className='index-item-author'>Body: {comment.body}</span>
                                {this.addOwnerButtons(comment.commenter_id, comment.id)} */}
                                <span className='annotator'>{this.addAnnotator(this.props.users[comment.commenter_id])}</span>
                                <div className='index-item-author'>
                                    {comment.body}
                                </div> <br />
                                {this.addOwnerButtons(comment.commenter_id, comment.id)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentIndex;
import React from 'react'
import { Link } from 'react-router-dom'

class CommentIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchComments();
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

    render() {
        return(
            <div id='index-page'>
                <div className='index-container'>
                    <div>
                        {this.props.comments.map((comment, i) => (
                            <div className='index-line-item' key={comment.id}>
                                <span className='index-item-title'>ID: {comment.commenter_id}</span>
                                <span className='index-item-author'>Body: {comment.body}</span>
                                <span className='index-item-author'>Passage Id: {comment.passage_id}</span>
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
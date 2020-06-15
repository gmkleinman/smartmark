import React from 'react'
import { Link } from 'react-router-dom'

class CommentIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchComments();
    }

    render() {
        return(
            <div id='index-page'>
                <div className='index-container'>
                    <h1 id='passage-index-header'>COMMENTS</h1>
                    <div>
                        {this.props.comments.map((comment, i) => (
                            <div className='index-line-item'>
                                <span className='index-item-title'>ID: {comment.commenter_id}</span>
                                <span className='index-item-author'>Body: {comment.body}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentIndex;
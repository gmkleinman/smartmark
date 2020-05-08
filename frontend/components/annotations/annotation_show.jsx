import React from 'react'
import { fetchUser } from '../../actions/user_actions';

class AnnotationShow extends React.Component {
    constructor(props){
        super(props)
    }
    
    componentDidMount() {
        // fetchUser(this.props.annotation.annotator_id);
    }

    handleDeleteClick(){
        this.props.deleteAnnotation(this.props.annotation.id)
        this.props.closeModal();
    }

    handleUpdateClick() {
        this.props.closeModal();
        this.props.openModal('editAnnotation');
    }

    addOwnerButtons() {
        if(!this.props.currentUser) return null;
        if(this.props.currentUser.id === this.props.annotation.annotator_id) {
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
        if(!this.props.annotation) return null;
        return(
            <div className='annotation-show-container'>
                <span className='annotator'>{this.props.users[this.props.annotation.annotator_id].username}:</span><br />
                <div className='annotation'>
                    {this.props.annotation.body}
                </div>
                {/* Number of upvotes: {this.props.annotation.upvote_count} <br /> */}
                {this.addOwnerButtons()}
            </div>
        )
    }
}

export default AnnotationShow;
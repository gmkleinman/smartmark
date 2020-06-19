import React from 'react'

class AnnotationShow extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            likeCount: 0,
        }
        this.addLike = this.addLike.bind(this)
        this.unLike = this.unLike.bind(this)
    }
    
    componentDidMount() {
        this.props.fetchLikes();
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

    addLike() {
        if(!this.props.currentUser) return null
        this.props.createLike({
            annotation_id: this.props.annotation.id,
            upvoter_id: this.props.currentUser.id
        })
        this.likeCount();
    }

    unLike() {
        if(!this.props.currentUser) return null
        let likeId = null; 
        let likes = Object.values(this.props.likes)
        likes.forEach(like => {
            if(like.upvoter_id === this.props.currentUser.id) likeId = like.id;            
        });

        if(likeId) {
            this.props.deleteLike(likeId)
        }
        this.likeCount();
    }

    likeCount() {
        if(!this.props.likes) return null;
        let likeCount = 0;
        let likes = Object.values(this.props.likes)
        likes.forEach(like => {
            if(like.annotation_id === this.props.annotation.id) likeCount += 1;
        });
        this.setState({likeCount: likeCount});
    }

    render() {
        if(!this.props.annotation) return null;
        return(
            <div className='annotation-show-container'>
                <span className='annotator'>{this.props.users[this.props.annotation.annotator_id].username}:</span><br />
                <div className='annotation'>
                    {this.props.annotation.body}
                </div>
                Upvotes: {this.state.likeCount}
                <button className='upvote-button' onClick={() => this.addLike()}>Upvote!</button>
                <button className='upvote-button' onClick={() => this.unLike()}>Delete Upvote</button>
                {this.addOwnerButtons()}
            </div>
        )
    }
}

export default AnnotationShow;
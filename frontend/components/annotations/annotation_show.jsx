import React from 'react'

class AnnotationShow extends React.Component {
    constructor(props){
        super(props)
    }
    
    componentDidMount() {
        //fetchuser here, so we know who wrote the annotation
    }

    handleDeleteClick(){
        this.props.deleteAnnotation(this.props.annotation.id)
        this.props.closeModal();
    }

    handleUpdateClick() {
        this.props.closeModal();
        this.props.openModal('editAnnotation');
        // this.props.updateAnnotation(this.props.annotation.id)
    }

    addOwnerButtons() {
        if(!this.props.currentUser) return null;
        if(this.props.currentUser.id === this.props.annotation.annotator_id) {
            return(
                <div>
                    <button onClick={() => this.handleDeleteClick()}>
                        Delete
                    </button>

                    <button onClick={() => this.handleUpdateClick()}>
                        Update
                    </button>
                </div>
            )
        }
        return null;
    }

    render() {
        if(!this.props.annotation) return null;
        if(!this.props.closeModal) return null;

        return(
            <div className='modal-background' onClick={this.props.closeModal}>
                
                <div className='modal-child' onClick={e => e.stopPropagation()}>
                    <span className='passage-line' key={this.props.annotation.id}>
                    User  #{this.props.annotation.annotator_id} says:<br /><br />
                    {this.props.annotation.body}<br /><br />
                    Number of upvotes: {this.props.annotation.upvote_count} <br />
                    {/* Start idx: {this.props.annotation.start_idx} <br />
                    End idx: {this.props.annotation.end_idx} <br /> */}
                    {this.addOwnerButtons()}
                    </span>
        
                </div>
            </div>
        )
    }
}

export default AnnotationShow;
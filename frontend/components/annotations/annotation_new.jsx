import React from 'react'

class AnnotationNew extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            body: '',
            upvote_count: 0,
            passage_id: this.props.passageId,
            annotator_id: this.props.currentUser.id, 
            start_idx: this.props.startIdx, 
            end_idx: this.props.endIdx, 
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createAnnotation(this.state);
        this.props.closeModal();
    }

    render() {
        if(!this.props.closeModal) return null;

        return(
            <div>
                <div>
                    <form>
                        <label className='form-field'>
                            <textarea
                                className='anno-textarea'
                                rows='12'
                                cols='40'
                                value={this.state.body}
                                onChange={this.update('body')}
                                placeholder='Type your annotation in here!'
                            />
                        </label><br />
                        <div id='create-button'>
                            <button id='anno-button' onClick={this.handleSubmit}>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AnnotationNew;
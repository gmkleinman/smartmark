import React from 'react'

class CommentNew extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            body: '',
            passage_id: this.props.passageId,
            commenter_id: this.props.currentUser.id, 
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
        this.props.createComment(this.state);
    }

    render() {
        if(!this.props.createComment) return null;
        if(!this.props.comment) return null;

        return(
            <div>
                <div>
                    <form>
                        <label className='form-field'>
                            <textarea
                                className='anno-textarea'
                                rows='12'
                                cols='45'
                                value={this.state.body}
                                onChange={this.update('body')}
                                placeholder='Type your comment in here!'
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

export default CommentNew;
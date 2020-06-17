import React from 'react'

class CommentNew extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            body: '',
            passage_id: null,
            commenter_id: null,
        }

        this.commented = false;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if(!this.props.currentUser) return null
        this.setState({
            passage_id: this.props.passageId,
            commenter_id: this.props.currentUser.id,
        })
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment(this.state);
        this.commented = true;
        this.setState({
            body: ''
        })
    }

    render() {
        if(!this.props.createComment) return null;
        if(!this.props.currentUser) return null;
        if(this.commented) return null;
        
        // if(!this.props.comment) return null;

        return(
            <div>
                <div>
                    <form>
                        {/* Current user is: {this.props.currentUser.id}  
                        pssage:{this.props.passageId}  
                        commtener:{this.props.currentUser.id}   */}
                        <label className='form-field'>
                            <textarea
                                className='anno-textarea'
                                rows='4'
                                cols='60'
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
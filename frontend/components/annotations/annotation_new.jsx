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
        // debugger
        this.props.createAnnotation(this.state);
    }

    render() {
        // debugger
        if(!this.props.annoModal) return null;

        return(
            <div className='modal-background' onClick={this.props.closeNewAnnotation}>
                <div className='modal-child' onClick={e => e.stopPropagation()}>
                    Create a new Annotation!
                    <form>

                        {/* refactor these errors for annotations */}
                        {/* {this.props.errors.length !== 0 ? (
                            <ul className='errors'>
                                {this.props.errors.map((error, i) => (
                                    <li key={`error-${i}`}>{error} </li>
                                ))}
                            </ul>
                        ) : (
                            []
                        )} */}

                        
                        <label className='form-field'>
                            <input 
                            type="textarea" 
                            value={this.state.username}
                            onChange={this.update('body')}
                            />
                        </label>
                        
                        <button className='button' onClick={this.handleSubmit}>Save</button>
                    </form> <br/>
                </div>
            </div>
        )
    }
}

export default AnnotationNew;
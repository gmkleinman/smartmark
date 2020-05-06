import React from 'react'
import { fetchAnnotation } from '../../actions/annotation_actions';

class AnnotationEdit extends React.Component {
    constructor(props){
        super(props)
        
        // this.state = {
        //     body: this.props.annotation.body,
        //     upvote_count: 0,
        //     passage_id: this.props.annotation.passageId,
        //     annotator_id: this.props.annotation.currentUser.id, 
        //     start_idx: this.props.annotation.startIdx, 
        //     end_idx: this.props.annotation.endIdx, 
        // }
        this.state = {
            annotation: {
                body: '',
                upvote_count: 0,
                passage_id: 0,
                annotator_id: 0, 
                start_idx: 0, 
                end_idx: 0, 
            }
        }
        this.annotation = {};

        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // this.annotation = fetchAnnotation(this.props.annotationId)
        // debugger
        this.setState({ annotation: fetchAnnotation(this.props.annotationId)})
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateAnnotation(this.state);
        this.props.closeModal();
    }

    render() {
        if(!this.props.closeModal) return null;

        return(
            <div>
                <div>
                    Update Existing Annotation
                    <form>
                        Body: {this.state.annotation.body}

                        <label className='form-field'>
                            <input 
                            type="textarea" 
                            value={this.state.annotation.body}
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

export default AnnotationEdit;
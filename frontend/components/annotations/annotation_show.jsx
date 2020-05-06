import React from 'react'

class AnnotationShow extends React.Component {
    constructor(props){
        super(props)
    }
    
    componentDidMount() {
        // no longer required because we're calling it on passage show
        // this.props.fetchAnnotations();
        // this.props.fetchAnnotation(this.props.annotationid)

    }

    render() {
        // debugger
        // if(!this.props.annotations[0]) return null;
        // if(!this.props.annotationId) return null;
        if(!this.props.annotation) return null;

        return(
            <div className='modal-background' onClick={this.props.closeModal}>
                
                <div className='modal-child' onClick={e => e.stopPropagation()}>
                    <span className='passage-line' key={this.props.annotation.id}>
                    User #{this.props.annotation.annotator_id} says:<br /><br />
                    {this.props.annotation.body}<br /><br />
                    Number of upvotes: {this.props.annotation.upvote_count} <br />
                    {/* Start idx: {this.props.annotation.start_idx} <br />
                    End idx: {this.props.annotation.end_idx} <br /> */}
                    </span>
        
                </div>
            </div>
        )
    }
}

export default AnnotationShow;
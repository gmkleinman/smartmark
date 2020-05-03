import React from 'react'

class AnnotationShow extends React.Component {
    constructor(props){
        super(props)
    }
    
    componentDidMount() {
        //per selector, only fetches annotations of the current passage 
        // no longer required because we're calling it on passage show
        // this.props.fetchAnnotations(); 
    }


    render() {
        // debugger
        if(!this.props.annotations[0]) return null;
        if(!this.props.modal) return null;

        return(
            <div className='modal-background' onClick={this.props.closeModal}>
                <div className='modal-child' onClick={e => e.stopPropagation()}>

                     <div>
                        We're the annotations for passage with id: {this.props.passageId}!<br /><br />
                        {this.props.annotations.map((annotation) => {
                            return (
                                <li className='passage-line' key={annotation.id}>
                                User #{annotation.annotator_id}:<br />
                                {annotation.body}<br />
                                Number of likes: {annotation.upvote_count} <br />
                                Start idx: {annotation.start_idx} <br />
                                End idx: {annotation.end_idx} <br />
                                </li>
                            )
                        })}
                     </div>
                </div>
            </div>
        )
    }
}

export default AnnotationShow;
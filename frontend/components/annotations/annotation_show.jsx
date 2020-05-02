import React from 'react'

class AnnotationShow extends React.Component {
    constructor(props){
        super(props)
    }
    
    componentDidMount() {
        //per selector, only fetches annotations of the current passage 
        this.props.fetchAnnotations(); 
    }


    render() {
        // debugger
        if(!this.props.annotations[0]) return <div>No annotations found.</div>
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
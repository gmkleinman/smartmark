import React from 'react'

class AnnotationShow extends React.Component {
    constructor(props){
        super(props)
    }
    
    componentDidMount() {
        this.props.fetchAnnotations();
    }


    render() {
        // debugger
        if(!this.props.annotations[0]) return <div>No annotations found.</div>
        return(
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
        )
    }
}

export default AnnotationShow;
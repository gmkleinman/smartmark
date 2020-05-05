import React from 'react'

class AnnotationNew extends React.Component {
    constructor(props){
        super(props)
    }
    
    componentDidMount() {

    }

    render() {
        // debugger
        // if(!this.props.annotations[0]) return null;
        // if(!this.props.annotationId) return null;
        if(!this.props.annoModal) return null;

        return(
            <div className='modal-background' onClick={this.props.closeNewAnnotation}>
                <div className='modal-child' onClick={e => e.stopPropagation()}>
                    Create a new Annotation!
                </div>
            </div>
        )
    }
}

export default AnnotationNew;
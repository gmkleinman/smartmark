import React from 'react';
// import { closeModal } from '../../actions_modal_actions';
// import { connect } from 'react-redux'
import AnnotationShowContainer from '../annotations/annotation_show_container';
import AnnotationNewContainer from '../annotations/annotation_new_container';

function Modal(props) {
    if(!props.modal) {
        return null;
    }

    // if modal is in state, return that modal, else null
    let component;
    switch (props.modal) {
        case 'viewAnnotation':
            component = <AnnotationShowContainer passageId={props.passageId} annotationId={props.annotationId}/>;
            break;
        case 'newAnnotation':
            component = <AnnotationNewContainer passageId={props.passageId} startIdx={props.startIdx} endIdx={props.endIdx} />
            break;
        default:
            return null;
    }   


    return(
        <div className='modal-background' onClick={props.closeModal}>
            <div className='modal-child' onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    )


}
export default Modal;
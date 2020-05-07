import React from 'react';
import AnnotationShowContainer from '../annotations/annotation_show_container';
import AnnotationNewContainer from '../annotations/annotation_new_container';
import AnnotationEditContainer from '../annotations/annotation_edit_container';
import RequireLoginContainer from '../annotations/require_login_container';

function Modal(props) {
    if(!props.modal) {
        return null;
    }

    let component;
    switch (props.modal) {
        case 'viewAnnotation':
            component = <AnnotationShowContainer passageId={props.passageId} annotationId={props.annotationId}/>;
            break;
        case 'newAnnotation':
            component = <AnnotationNewContainer passageId={props.passageId} startIdx={props.startIdx} endIdx={props.endIdx} />
            break;
        case 'editAnnotation':
            component = <AnnotationEditContainer passageId={props.passageId} annotationId={props.annotationId} />
            break;
        case 'requireLogin':
            component = <RequireLoginContainer />;
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
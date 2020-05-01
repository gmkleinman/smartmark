import React from 'react';
import AnnotationShowContainer from '../annotations/annotation_show_container';

function Modal(props) {
    // debugger
    //this gets hit once on page load, but does not get hit when we click the button
    if(!props.modal) {
        return null;
    }

    debugger
    //this debugger has never gotten hit

    //if modal is in state, return that modal, else null
    let component;
    switch (props.modal) {
        case 'annotations':
            component = <AnnotationShowContainer />;
            break;
        default:
            return null;
    }   

    //this debugger has never gotten hit
    debugger
    return(
        <div className='modal-background' onClick={props.closeModal}>
            <div className='modal-child' onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    )


}
export default Modal;
import React from 'react';
import AnnotationShowContainer from '../annotations/annotation_show_container';

function Modal(props) {
    if(!props.modal) {
        return null;
    }

//MODAL WAS CREATED FOR ANNOTATIONS, BUT IT NOW HAS ITS OWN. THIS CAN STILL BE USED FOR OTHERS IF NEEDED.

    //if modal is in state, return that modal, else null
    // let component;
    // switch (props.modal) {
    //     case 'annotations':
    //         component = <AnnotationShowContainer passageId={props.passageId}/>;
    //         break;
    //     default:
    //         return null;
    // }   


    return(
        <div className='modal-background' onClick={props.closeModal}>
            <div className='modal-child' onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    )


}
export default Modal;
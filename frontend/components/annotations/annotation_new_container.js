import { connect } from 'react-redux'
import AnnotationNew from './annotation_new'
import { closeNewAnnotation } from '../../actions/anno_modal_actions'


//import openAnnotationNew to passage_show


const mSTP = (state) => {
    // debugger
    return({
        annoModal: state.ui.annoModal,
        // passageId
    })
}

const mDTP = dispatch => {
    return ({
        closeNewAnnotation: () => dispatch(closeNewAnnotation())
    })
}

export default connect(mSTP, mDTP)(AnnotationNew);
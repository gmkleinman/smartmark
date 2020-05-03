import { connect } from 'react-redux'
import PassageShow from './passage_show'
import { fetchPassage, fetchPassages } from '../../actions/passage_actions'
import { openModal } from '../../actions/modal_actions'
import { fetchAnnotations } from '../../actions/annotation_actions'
import { selectAnnotationsByPassageId } from '../../reducers/selectors'


const mSTP = (state, ownProps) => {
    // debugger
    // console.log(ownProps.match.params.passageId)
    // console.log(state)
    // console.log(selectAnnotationsByPassageId(state, ownProps.match.params.passageId))
    return(
        {
            passage: state.entities.passages[ownProps.match.params.passageId],
            annotations: state.entities.annotations
        }
    )
}


const mDTP = dispatch => {
    // debugger
    
    return {
        fetchPassage: passageId => dispatch(fetchPassage(passageId)),
        fetchPassages: () => dispatch(fetchPassages()),
        fetchAnnotations: () => dispatch(fetchAnnotations()),
        openModal: () => dispatch(openModal('annotations')),
    }
}

export default connect(mSTP, mDTP)(PassageShow);
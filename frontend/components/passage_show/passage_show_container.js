import { connect } from 'react-redux'
import PassageShow from './passage_show'
import { fetchPassage, fetchPassages } from '../../actions/passage_actions'
import { openModal } from '../../actions/modal_actions'
import { fetchAnnotations } from '../../actions/annotation_actions'

const mSTP = (state, ownProps) => {
    // debugger
    return(
        {
            passage: state.entities.passages[ownProps.match.params.passageId],
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
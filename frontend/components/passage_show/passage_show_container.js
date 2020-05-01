import { connect } from 'react-redux'
import PassageShow from './passage_show'
import { fetchPassage, fetchPassages } from '../../actions/passage_actions'

const mSTP = (state, ownProps) => {
    // debugger
    return(
        {
            passage: state.entities.passages[ownProps.match.params.passageId],
        }
    )
}


const mDTP = dispatch => ({
    fetchPassage: passageId => dispatch(fetchPassage(passageId)),
    fetchPassages: () => dispatch(fetchPassages()),
})

export default connect(mSTP, mDTP)(PassageShow);
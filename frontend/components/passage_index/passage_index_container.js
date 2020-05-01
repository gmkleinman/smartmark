import { connect } from 'react-redux';
import PassageIndex from './passage_index';
import { fetchPassages } from '../../actions/passage_actions';

const mSTP = state => {
    // debugger
    return(
        {
            passages: Object.values(state.entities.passages),
        }
    )
}

const mDTP = dispatch => ({
    fetchPassages: () => dispatch(fetchPassages()),
})

export default connect(mSTP, mDTP)(PassageIndex);
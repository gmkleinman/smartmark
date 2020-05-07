import React from 'react'
import { Link } from 'react-router-dom'

class PassageIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        this.props.fetchPassages();
    }

    render() {
        return(
            <div id='index-page'>
                <div className='index-container'>
                    <h1 id='passage-index-header'>PASSAGES</h1>
                    <h2 id='passage-index-subheader'>TRENDING ON SMARTMARK</h2>
                    <div>
                        {this.props.passages.map((passage, i) => (
                            <Link key={`${passage.id}`} id='passage-index-row' to={`/passages/${passage.id}`}>
                                <div className='index-line-item'>
                                    <span className='index-item-count'>{i+1}</span>
                                    <span className='index-item-image'><img src={`${passage.image_url}`} /></span>
                                    <span className='index-item-title'> {passage.title}</span>
                                    <span className='index-item-author'>{passage.author}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default PassageIndex;
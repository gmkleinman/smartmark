import React from 'react'
import { Link } from 'react-router-dom'

class PassageIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchPassages();
    }

    render() {
        return(
            <div id='index-page'>
                <div className='index-container'>
                    <h1>PASSAGES</h1>
                    <table>
                        <tbody>
                            {this.props.passages.map((passage, i) => (
                                <tr key={`passage-index-row-${i+1}`}> 

                                    <td id='passage-index-item'>{i+1}</td>

                                    <td id='passage-index-item'>
                                        <img src={`${passage.image_url}`} />
                                    </td>

                                    <td id='passage-index-item'>
                                        <Link className='redirect-text' to={`/passages/${passage.id}`}>{passage.title}</Link>
                                    </td>

                                    <td id='passage-index-item'>{passage.author}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default PassageIndex;
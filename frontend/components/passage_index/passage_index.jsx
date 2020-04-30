import React from 'react'

class PassageIndex extends React.Component {
    constructor(props){
        super(props)
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
                                    <td id='passage-index-item'>placeholder</td>
                                    <td id='passage-index-item'>{passage.title}</td>
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
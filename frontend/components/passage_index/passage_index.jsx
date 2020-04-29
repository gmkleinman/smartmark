import React from 'react'

class PassageIndex extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div classname='passages-container'>
                <h1>Passage Index</h1>
                <ul className='passages-index'>
                {this.props.passages.map((passage, i) => (
                    <li key={`passage-${i}`} classname='passage-title'> {passage.title}</li>
                ))}
                </ul>
            </div>
        )
    }
}

export default PassageIndex;
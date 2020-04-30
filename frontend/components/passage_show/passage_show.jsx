import React from 'react'

class PassageShow extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchPassages();
    }
    
    render() {
        return(
            <div id='passage-container'>
                <div className='temp-header'>
                {this.props.passage ? (
                    `${this.props.passage.title} by
                    ${this.props.passage.author}`
                ): ("nope")}
                </div>
                <ul className='passage'>
                    {this.props.passage ? (
                        this.props.passage.body.map((line, i) => {
                            return <li className='passage-line' key={`line-${i}`}>{line}</li>
                        })
                        ):(
                            "this failed to render"
                    )}
                </ul>
            </div>
        )
    }
}

export default PassageShow;


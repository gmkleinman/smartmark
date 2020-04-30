import React from 'react'

class PassageShow extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        this.props.fetchPassages();
    }
    
    render() {
        if(!this.props.passage) return null
        return(
            <div id='passage-container'>
                <div className='temp-header'>
                {this.props.passage.title}<br />
                {this.props.passage.author}
                </div>
                <ul className='passage'>
                {this.props.passage.body.map((line, i) => {
                    return <li className='passage-line' key={`line-${i}`}>{line}</li>
                })}
                </ul>
            </div>
        )
    }
}

export default PassageShow;


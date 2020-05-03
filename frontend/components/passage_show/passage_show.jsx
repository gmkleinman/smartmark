import React from 'react'
import AnnotationShowContainer from '../annotations/annotation_show_container'

class PassageShow extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectedText: ""
        }

        this.handleSelection = this.handleSelection.bind(this)
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        this.props.fetchPassages();
    }

    handleSelection() {
        this.setState( {selectedText: window.getSelection().toString()} )
    }

    render() {
        if(!this.props.passage) return null
        // debugger
        return(
            <div id='passage-show-container'>
                <AnnotationShowContainer passageId={this.props.passage.id}/> 
                <div id='passage-container' onMouseUp={this.handleSelection}>
                this.selectedText is here: <br />
                {this.state.selectedText}
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

                <div id='annotations-container'>
                    <button onClick={this.props.openModal}>Show Annotations</button>
                </div>
                
            </div>
        )
    }
}

export default PassageShow;


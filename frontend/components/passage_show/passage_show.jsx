import React from 'react'
import AnnotationShowContainer from '../annotations/annotation_show_container'

class PassageShow extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectedText: "",
            // indices: []
        }

        this.handleSelection = this.handleSelection.bind(this)
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        this.props.fetchPassages();
        this.props.fetchAnnotations();
    }

    handleSelection() {
        this.setState( {selectedText: window.getSelection().toString()} )
    }

    getIndices() {
        if (!this.props.annotations) return null

        let indices = [];
        this.props.annotations.map(annotation => {
            indices.push([annotation.start_idx, annotation.end_idx])
        })

        function sortIndices(a,b) {
            if (a[0] === b[0]) {
                return 0;
            }
            else {
                return (a[0] < b[0]) ? -1 : 1;
            }
        }

        return indices.sort(sortIndices);
    }

    highlighter(str, indices, offset = 0) {
        if(indices.length < 1) return str;
    
        let startIdx = indices[0][0] - offset 
        let endIdx = indices[0][1] - offset
        indices.shift();
        
        let strStart = str.substring(0, startIdx)
        let highlighted = str.substring(startIdx, endIdx+1)
        let strEnd = str.substring(endIdx+1, str.length)
    
        return (
            <span>
                {strStart} 
                <span className='highlighted'>{highlighted}</span>
                {this.highlighter(strEnd, indices, endIdx + offset + 1)}

            </span>
        )
    }

    render() {
        if(!this.props.passage) return null
        // if(!this.props.annotations[0]) return null;
        // console.log(this.props.annotations)
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
                        {this.highlighter(this.props.passage.body, (this.getIndices()))}
                        {/* above should be uncommented when indices are seeded properly */}

                        {/* {this.highlighter(this.props.passage.body, [[0,42], [103,200], [469,546]])} */}
                        
                        {/* {console.log(this.props.annotations)} */}
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

import React from 'react'
import AnnotationShowContainer from '../annotations/annotation_show_container'
import AnnotationNewContainer from '../annotations/annotation_new_container'

class PassageShow extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selected: "",
            selectionStart: 0,
            selectionEnd: 0,
        }

        this.handleSelection = this.handleSelection.bind(this)
        this.handleShowAnnoClick = this.handleShowAnnoClick.bind(this)
        this.handleNewAnnoClick = this.handleNewAnnoClick.bind(this)
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        this.props.fetchPassages();
        this.props.fetchAnnotations();
        
    }

    handleSelection() {        

        //This recursively finds the offset based on offsetidx set during initial render
        function getTotalOffset(node) {
            // debugger
            if (node.getAttribute('id') === 'passage') return 0;
            if (!node.getAttribute('offsetidx')) return getTotalOffset(node.parentNode);
            return parseInt(node.getAttribute('offsetidx')) + getTotalOffset(node.parentNode);
        }

        let selection = window.getSelection();

        //THESE ARE WORKING START AND END POINTS - BUT THEY RETURN 0 FOR "CLOSE" HIGHLIGHTS
        let startIdx = selection.anchorOffset+getTotalOffset(selection.anchorNode.parentNode)
        let endIdx = selection.focusOffset+getTotalOffset(selection.focusNode.parentNode)

        this.setState({selectionStart: startIdx, selectionEnd: endIdx})

        //openAnnotationForm();
    }

    getIndices() {
        if (!this.props.annotations) return null

        let indices = [];
        this.props.annotations.map(annotation => {
            indices.push([annotation.start_idx, annotation.end_idx, annotation.id])
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

    handleShowAnnoClick(annotationId){
        this.props.openShowAnnotation(annotationId)
    }
    
    handleNewAnnoClick() {
        this.props.openNewAnnotation()
    }

    //this will need to be refactored to handle multiple highlights on the same line -> instead of return, how do I add things?
    //I think I can do this recursively? rest of line -> recursive call
    highlighter(line, lineStartIdx, indices) {
        if(indices.length === 0) return line
        // indices is a 2d array of all annotation indices

        let lineEnd = line.length;
        let annotationId = indices[0][2];

        let annoStartIdx = indices[0][0] - lineStartIdx;
        let annoEndIdx = indices[0][1] - lineStartIdx;

        if (annoStartIdx <= line.length && annoEndIdx <= line.length) { //both ends included
            indices.shift();
            return(
                <span>
                    <span>{line.substring(0, annoStartIdx)}</span>
                    <span offsetidx={annoStartIdx} className='highlighted' onClick={() => this.handleShowAnnoClick(annotationId)}>
                        {line.substring(annoStartIdx, annoEndIdx+1)}
                    </span>
                    <span offsetidx={annoEndIdx+1}>{line.substring(annoEndIdx+1, lineEnd)}</span>
                </span>
            )
        }
        else if (annoStartIdx <= line.length && annoEndIdx >= line.length) { //start included, end not
            return (
                <span>
                    <span>{line.substring(0, annoStartIdx)}</span>
                    <span offsetidx={annoStartIdx} className='highlighted' onClick={() => this.handleShowAnnoClick(annotationId)}>
                        {line.substring(annoStartIdx, lineEnd)}
                    </span>
                </span>
            )

        } else if (annoStartIdx <= 0 && annoEndIdx >= 0) { //end included, start not
            indices.shift();
            return(
                <span>
                    <span className='highlighted' onClick={() => this.handleShowAnnoClick(annotationId)}>
                        {line.substring(0, annoEndIdx)}
                    </span>
                    <span offsetidx={annoEndIdx}>{line.substring(annoEndIdx, lineEnd)}</span>
                </span>
            )

        } else { //neither
            return line
        }
    }

    passageWithLineIndices() {
        let indices = this.getIndices();
        let endIdx = 0;
        // debugger

        return ( 
            <div>
                {this.props.passage.body.split('\n').map((line, i) => {
                    endIdx += line.length;
                    return (
                        <div key={`${i}`} offsetidx={`${endIdx-line.length}`} className='passage-line'>
                            {this.highlighter(line, endIdx-line.length, indices)}
                        </div>
                    )
                })}
            </div>
        )
    }

    render() {
        if(!this.props.passage) return null
        // if(!this.props.annotations[0]) return null;
        // debugger
        return(
            <div id='passage-show-container'>
                <div id='passage-container' onMouseUp={this.handleSelection}>
                    <button onClick={this.handleNewAnnoClick}>CLICK ME FOR ANNO NEW</button>
                    SelectionIdxs: <br />
                    {this.state.selectionStart}<br />
                    {this.state.selectionEnd}

                    <div className='title'> {this.props.passage.title} </div>
                    <div className='author'> {this.props.passage.author} </div>
                    
                    <div id='passage'>
                        {this.passageWithLineIndices()}
                    </div>

                </div>
                
                <div>
                    <AnnotationNewContainer />
                    <AnnotationShowContainer passageId={this.props.passage.id}/> 
                </div>

            </div>
        )
    }
}

export default PassageShow;
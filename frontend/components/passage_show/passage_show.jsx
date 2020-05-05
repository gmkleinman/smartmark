import React from 'react'
import AnnotationShowContainer from '../annotations/annotation_show_container'

class PassageShow extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selected: "",
            selectionStart: 0,
            selectionEnd: 0,
        }

        this.handleSelection = this.handleSelection.bind(this)
        this.handleClick = this.handleClick.bind(this)
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

        //THIS IS A WORKING START POINT!
        let startIdx = selection.anchorOffset+getTotalOffset(selection.anchorNode.parentNode)

        //this is not a working end point
        let endIdx = selection.focusOffset+getTotalOffset(selection.focusNode.parentNode)

        this.setState({selectionStart: startIdx, selectionEnd: endIdx})


        // let selected = window.getSelection()
        // this.setState( {selectedText: window.getSelection().toString()} )

        // if (selected.toString() !== ''){
        //     this.setState( {selected: selected.getRangeAt(0)} )
        // }

        // console.log(window.getSelection().getRangeAt(0).toString)
        // console.log('selectionstart:')




        // console.log(selection.focusOffset) //do anchorOffset from the passage div and this might work
        
        // console.log("Parent Node:")
        // console.log(window.getSelection().getRangeAt(0).startOffset)
        // console.log(window.getSelection().getRangeAt(0).endOffset)

        // let selection = window.getSelection()
        // console.log(parseInt(selection.anchorNode.id))
        // console.log(selection.anchorNode.parentNode.getAttribute('offsetidx'))
        // console.log(selection.anchorNode.parentNode.parentNode.getAttribute('offsetidx'))
        // console.log(typeof parseInt(selection.anchorNode.parentNode.getAttribute('offsetidx')))
        // console.log(getTotalOffset(selection.anchorNode.parentNode))
        // console.log(selection)
        // console.log(selection.anchorNode)
        // console.log(selection.anchorNode.parentNode.getAttribute('offsetidx'))

        // (parseInt(node.parentNode.getAttribute('offsetidx'))) ? true : false
        // console.log(document.getElementById('passage'))
        // console.log(document.getElementById('passage-show-container'))

        // const { focusNode, anchorNode, anchorOffset, focusOffset, baseNode } = window.getSelection();

        // console.log(focusNode)
        // console.log(anchorNode)
        // console.log(anchorOffset)
        // console.log(focusOffset)
        // console.log(baseNode)
        


        // console.log(window.getSelection().getRangeAt(0).commonAncestorContainer.parentNode.parentNode.parentNode)

        // function findPassageNode(node) {
        //     if (node.getAttribute('class') === 'passage') return node;
        //     if (node.getAttribute('id') === 'passage-show-container') return node;
        //     return findPassageNode(node.parentNode)
        // }

        // let parentNode = window.getSelection().getRangeAt(0).commonAncestorContainer.parentNode
        // let passageNode = findPassageNode(parentNode)
        
        // console.log(window.getSelection().getRangeAt(0).commonAncestorContainer.findPassageNode(parentNode))

        // if( parentNode.getAttribute('class')) {
        //     console.log(parentNode.getAttribute('class'))
        // }

        
        //finds the passage node for the user's annotation selection reference point

        // console.log(findPassageNode(parentNode))
        // console.log(typeof findPassageNode(parentNode))
        // console.log(parentNode)
        // console.log(typeof parentNode)
        // console.log(findPassageNode(parentNode))


        // console.log(window.getSelection().getRangeAt(0).commonAncestorContainer.passageNode)
        // console.log(window.getSelection().getRangeAt(0).commonAncestorContainer) //this is the selected text
        // console.log(window.getSelection().anchorNode) //same

        // console.log(window.getSelection().getRangeAt(0).findPassageNode(parentNode))
        // console.log(passageNode)
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

    handleClick(annotationId){
        this.props.openModal(annotationId)
    }

    //indices are a 2D array structured as [[startIdx, endIdx, annotationId], [...]]
    //this was for a single block of text
    // highlighterDeprecated(str, indices, offset = 0) {
    //     if(indices.length < 1) return str;
    
    //     let startIdx = indices[0][0] - offset 
    //     let endIdx = indices[0][1] - offset
    //     let annotationId = indices[0][2]
    //     indices.shift();
        
    //     let strStart = str.substring(0, startIdx)
    //     let highlighted = str.substring(startIdx, endIdx+1)
    //     let strEnd = str.substring(endIdx+1, str.length)

    //     return (
    //         <span>
    //             {strStart} 
    //             <span className='highlighted' onClick={() => this.handleClick(annotationId)}>{highlighted}</span>
    //             {this.highlighter(strEnd, indices, endIdx + offset + 1)}
    //         </span>
    //     )
    // }

    //this will need to be refactored to handle multiple highlights on the same line -> instead of return, how do I add things?
    //I think I can do this recursively? rest of line -> recursive call
    highlighter2(line, lineStartIdx, indices) {
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
                    <span offsetidx={annoStartIdx} className='highlighted' onClick={() => this.handleClick(annotationId)}>
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
                    <span offsetidx={annoStartIdx} className='highlighted' onClick={() => this.handleClick(annotationId)}>
                        {line.substring(annoStartIdx, lineEnd)}
                    </span>
                </span>
            )

        } else if (annoStartIdx <= 0 && annoEndIdx >= 0) { //end included, start not
            indices.shift();
            return(
                <span>
                    <span className='highlighted' onClick={() => this.handleClick(annotationId)}>
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
                            {this.highlighter2(line, endIdx-line.length, indices)}
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
                    <AnnotationShowContainer passageId={this.props.passage.id}/> 
                </div>

            </div>
        )
    }
}

export default PassageShow;


//add all spans together until you reach the root one -> assign a span # every time based on position
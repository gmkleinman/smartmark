import React from 'react'
import ModalContainer from '../modal/modal_container'

class PassageShow extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selected: "",
            selectionStart: 0,
            selectionEnd: 0,
        }

        this.clickedAnnotationId = 0;
        this.handleSelection = this.handleSelection.bind(this)
        this.handleShowAnnoClick = this.handleShowAnnoClick.bind(this)
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        this.props.fetchPassages();
        this.props.fetchAnnotations();
    }

    handleSelection() {
        if(!this.props.currentUser) {
            this.props.openModal('requireLogin')
        } else {

            //refactor to ask user to log in
            let selection = this.getSelectedIndices();
            let existingIndices = this.getExistingIndices();
            let overlappingIndices = false;

            if(selection[0] > selection[1]) { //fix user selecting backwards
                [selection[0],selection[1]] = [selection[1],selection[0]]
            }

            existingIndices.forEach(existingIndex => {
                if( 
                    (selection[0] > existingIndex[0] && selection[0] < existingIndex[1]) || 
                    (selection[1] > existingIndex[0] && selection[1] < existingIndex[1]) || 
                    (selection[0] < existingIndex[0] && selection[1] > existingIndex[1])
                ) {
                    overlappingIndices = true;
                }
                
            });

            this.setState({selectionStart: selection[0], selectionEnd: selection[1]}, () => {
                if(this.state.selectionStart != this.state.selectionEnd && overlappingIndices == false) {
                    this.props.openModal('newAnnotation')
                }
            })

            return null;   
        }
    }

    getSelectedIndices() {
        //This recursively finds the offset based on offsetidx set during initial render
        function getTotalOffset(node) {
            // if(typeof node != HTMLElement) return 0; this breaks it, but something like it should happen
            if (node.getAttribute('id') === 'passage') return 0;
            if (!node.getAttribute('offsetidx')) return getTotalOffset(node.parentNode);
            return parseInt(node.getAttribute('offsetidx')) + getTotalOffset(node.parentNode);
        }

        let selection = window.getSelection();

        //THESE ARE WORKING START AND END POINTS - BUT THEY RETURN 0 FOR "CLOSE" HIGHLIGHTS
        let startIdx = selection.anchorOffset+getTotalOffset(selection.anchorNode.parentNode)
        let endIdx = selection.focusOffset+getTotalOffset(selection.focusNode.parentNode)

        return [startIdx, endIdx]
    }

    getExistingIndices() {
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
        this.clickedAnnotationId = annotationId;
        this.props.openModal('viewAnnotation')
    }

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
                        {line.substring(annoStartIdx, annoEndIdx)}
                    </span>
                    <span offsetidx={annoEndIdx}>
                        {this.highlighter(line.substring(annoEndIdx, lineEnd),lineStartIdx+annoEndIdx, indices)}
                    </span>
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
                    {this.highlighter(line.substring(annoStartIdx, annoEndIdx), lineStartIdx+annoEndIdx, indices)}
                </span>
            )

        } else { //neither
            return line
        }
    }

    passageWithLineIndices() {
        let indices = this.getExistingIndices();
        let endIdx = 0;

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
        if(!this.props.openModal) return null
        return(
            <div>
                <div className='passage-show-header'>
                    <div className='header-sides'></div>
                        <div className='passage-internal-header'>
                            <div className='test'></div>
                            <div className='passage-info'>
                                <div className='title'> {this.props.passage.title} </div><br />
                                <div className='author'> {this.props.passage.author} </div>
                            </div>
                            <div></div>
                        </div>
                    <div className='header-sides'></div>
                </div>

                <div id='passage-show-container'>
                    <div className='passage-sides'></div>

                    <div id='passage-container' onMouseUp={this.handleSelection}>
                        {/* SelectionIdxs: <br /> */}
                        {/* {this.state.selectionStart} , {this.state.selectionEnd} */}

                        
                        <div id='passage'>
                            {this.passageWithLineIndices()}
                        </div>

                    </div>
                    
                    <div>
                        <ModalContainer
                            passageId={this.props.passage.id}
                            startIdx={this.state.selectionStart}
                            endIdx={this.state.selectionEnd}
                            annotationId={this.clickedAnnotationId}
                        />
                    </div>

                    <div className='passage-sides'></div>
                </div>
            </div>
        )
    }
}

export default PassageShow;
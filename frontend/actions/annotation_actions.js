import * as AnnotationApiUtil from '../util/annotation_api_util';

export const RECEIVE_ANNOTATIONS = 'RECEIVE_ANNOTATIONS';
export const RECEIVE_ANNOTATION = 'RECEIVE_ANNOTATION ';
export const REMOVE_ANNOTATION = 'REMOVE_ANNOTATION';

const receiveAnnotations = annotations => ({
    type: RECEIVE_ANNOTATIONS,
    annotations,
})

const receiveAnnotation = annotation => ({
    type: RECEIVE_ANNOTATION,
    annotation,
})

const removeAnnotation = annotationId => ({
    type: REMOVE_ANNOTATION,
    annotationId,
})

export const fetchAnnotations = () => dispatch => (
    AnnotationApiUtil.fetchAnnotations()
        .then(annotations => dispatch(receiveAnnotations(annotations)))
)

export const fetchAnnotation = annotationId => dispatch => (
    AnnotationApiUtil.fetchAnnotation(annotationId)
        .then(annotation => dispatch(receiveAnnotation(annotation)))
)

export const createAnnotation = annotation => dispatch => (
    AnnotationApiUtil.createAnnotation(annotation)
        .then(annotation => dispatch(receiveAnnotation(annotation)))
)

export const updateAnnotation = annotation => dispatch => (
    AnnotationApiUtil.updateAnnotation(annotation)
        .then(annotation => dispatch(receiveAnnotation(annotation)))
)

export const deleteAnnotation = annotationId => dispatch => (
    AnnotationApiUtil.deleteAnnotation(annotationId)
        .then(() => dispatch(removeAnnotation(annotationId)))
)
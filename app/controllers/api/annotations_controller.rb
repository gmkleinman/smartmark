class Api::AnnotationsController < ApplicationController
    def index
        @annotations = Annotation.all 
        render :index
    end
    
    def show
        @annotation = Annotation.find_by(id: params[:id])
        if @annotation 
            render :show
        else
            render json: ['Annotation not found'], status: 404
        end
    end

    def create
        # debugger
        @annotation = Annotation.new(annotation_params)     
        if @annotation.save
            render :show
        else
            render json: @annotation.errors.full_messages, status: :unprocessable_entity
        end
    end

    def update
        @annotation = Annotation.find_by(id: params[:id])
        if @annotation
            @annotation.update(annotation_params)
            render :show    
        else
            render json: ['Annotation not found'], status: 404
        end
    end

    def destroy
        @annotation = Annotation.find_by(id: params[:id])
        if @annotation
            @annotation.destroy
        end
        render json: ['This is a placeholder - what to render when deleted?']
    end

    protected
    def annotation_params
        params.require(:annotation).permit(:body, :passage_id, :annotator_id, :upvote_count, :start_idx, :end_idx)
    end
end

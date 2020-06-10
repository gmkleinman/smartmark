class Api::CommentsController < ApplicationController
    def show
        @comment = Comment.find_by(id: params[:id])
        if @comment 
            render :show
        else
            render json: ['Comment not found'], status: 404
        end
    end

    def create
        @comment = Comment.new(comment_params)     
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: :unprocessable_entity
        end
    end

    def update
        @comment = Comment.find_by(id: params[:id])
        if @comment
            @comment.update(comment_params)
            render :show    
        else
            render json: ['Comment not found'], status: 404
        end
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        if @comment
            @comment.destroy
        end
        render json: ['This is a placeholder - what to render when deleted?']
    end

    protected
    def comment_params
        params.require(:comment).permit(:body, :passage_id, :commenter_id)
    end
end

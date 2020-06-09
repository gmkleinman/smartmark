class Api::CommentsController < ApplicationController
    def show
        @comment = Comment.find_by(id: params[:id])
        if @comment 
            render :show
        else
            render json: ['Comment not found'], status: 404
        end
    end

    
end

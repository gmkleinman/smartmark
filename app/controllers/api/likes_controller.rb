class Api::LikesController < ApplicationController
    def index
        @likes = Like.all 
        render :index
    end

    def create
        @like = Like.new(like_params)     
        if @like.save
            render json: ['Upvoted!']
        else
            render json: @like.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        @like = Like.find_by(id: params[:id])
        if @like
            @like.destroy
        end
        render json: ['This is a placeholder - what to render when deleted?']
    end

    protected
    def like_params
        params.require(:like).permit(:upvoter_id, :annotation_id)
    end
end

class Api::PassagesController < ApplicationController
    def index
        @passages = Passage.all
        render :index
    end

    def show
        @passage = Passage.find_by(id: params[:id])
        if @passage
            render :show
        else
            render json: ['Passage not found'], status: 404
        end
    end

    def create
        @passage = Passage.new(passage_params)
        if @passage.save
            render :show
        else
            render json: @passage.errors.full_messages, status: 422
        end
    end

    def update
        @passage = Passage.find_by(id: params[:id])
        if @passage.update(passage_params)
            render :show
        else
            render json: ['Passage not found'], status: 404
        end
    end

    def destroy
        @passage = Passage.find_by(id: params[:id])
        if @passage
            @passage.destroy
        end
        #this works, but there is probably a better way -> redirect to index controller?
        # @passages = Passage.all
        redirect_to action: :index
    end

    private
    def passage_params
        params.require(:passage).permit(:title, :author, :body)
    end
end

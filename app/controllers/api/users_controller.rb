class Api::UsersController < ApplicationController
    def show
        @user = User.find_by(id: params[:id])
        if @user
            render :show
        else
            render json: ['User not found'], status: 404
        end
    end

    def index
        @users = User.all
        if @users
            render :index
        end
    end

    def create 
        @user = User.new(params.require(:user).permit(:username, :password, :email))
        if @user.save
            login!(@user)
            render 'api/users/show'
        else 
            render json: @user.errors.full_messages, status: 422
        end
    end
end


class Api::UsersController < ApplicationController
	
	before_action :set_user, only: [:show, :update, :destroy]

	def index
		users = User.all
		render json: users, status: 200
	end

	def signup
		@user = User.new(user_params)
		if @user.valid? && @user.save
			render json: @user, status: 201
		else
			render_errors_in_json
		end
	end

	def show
		if @user
			render json: @user, status: 200
		end
	end

	def update
		if @user.update(user_params)
			render json: @user, status: 200
		else
			render_errors_in_json
		end
	end

	def destroy
		if @user.destroy
			render status: 204
		else
			render json: {message: "Unable to process your request"}, status: 400
		end
	end

	def find_user
		@user = User.find_by(email: params[:user][:email])
		if @user
			render json: @user
		else
			@errors = @user.errors.full_messages
			render json: @errors
		end
	end

	private

	def user_params
		params.require(:user).permit(:email, :password)
	end

	def set_user
		@user = User.find_by(id: params[:id])
		if !@user
			render json: {
				errors: {
					messages: { user: "can't be found"}
				}
			}, status: 404
		end
	end

	def render_errors_in_json
		render json: { 
			errors: { 
				messages: @user.errors.messages 
			}
		}, status: 422
	end
end
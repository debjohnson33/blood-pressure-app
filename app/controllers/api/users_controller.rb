require 'auth'
class Api::UsersController < ApplicationController
	
	before_action :set_user, only: [:show, :update, :destroy]

	def current
		render json: current_user.as_json(only: %i(id email))
	end

	def index
		users = User.all
		render json: users, status: 200
	end

	def signup
		@user = User.new(user_params)
		if @user.save
			token = Auth.create_token({id: @user.id, email: @user.email})
			returned_user = Auth.decode_token(token)
			render json: {id: @user.id, email: @user.email}, status: 201
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
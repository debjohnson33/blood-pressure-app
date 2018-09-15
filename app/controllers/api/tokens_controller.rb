require 'auth'
class Api::TokensController < ApplicationController
	def create
		user = User.find_by(email: params[:email])
		if user&.authenticate(params[:password])
			
			token = Auth.create_token({id: user.id, email: user.email})
			returned_user = Auth.decode_token(token)
			render json: {id: user.id, email: user.email}, status: 200
		else
			render json: {errors: "Email or Password is incorrect"}, status: 500
		end
	end
end

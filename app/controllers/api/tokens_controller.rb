require 'auth'
class Api::TokensController < Knock::AuthTokenController
	def login
		user = User.find_by(email: params[:email])
		if user&.authenticate(params[:password])
			
			token = Auth.create_token({id: user.id, email: user.email})
			returned_user = Auth.decode_token(token)
			render json: {id: user.id, email: user.email}, status: 200
		else
			render json: {errors: "Email or Password is incorrect"}, status: 500
		end
	end

	def find_user
		returned_user = Auth.decode_token(params[:token])
		if returned_user
			user_hash = returned_user[0]

			render json: {
				email: user_hash["user"]["email"],
				id: user_hash["user"]["id"]
			}, status: 200
		else
			render json: {errors: "Users not found"}, status: 500
		end
	end

	def logout

	end
end

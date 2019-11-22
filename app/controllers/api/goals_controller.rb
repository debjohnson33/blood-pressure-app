class Api::GoalsController < ApplicationController

	before_action :authenticate_user
	before_action :set_goal, only: [:update, :destroy]

	#only need index to show the user goal from the 'has one' relationship
	def index
		@goals = current_user.goal
		render json: @goals, status: 200 
	end

	def create
		@goal = current_user.build_goal(goal_params)
		if @goal.save
			render json: @goal, status: 201
		else
			render_errors_in_json
		end		
	end

	def update
		if @goal.update(goal_params)
			render json: @goal, status: 200
		else
			render_errors_in_json
		end
	end

	def destroy
		current_user.goal.destroy
		render json: 204
	end

	private

	def goal_params
		params.require(:goal).permit(:systolic_bp, :diastolic_bp, :frequency)
	end

	def render_errors_in_json
		render json: { 
			errors: { 
				messages: @goal.errors.messages 
			}
		}, status: 422
	end

	def set_goal
		@goal = current_user.goal
		if !@goal
			render json: {
				errors: {
					messages: { goal: "can't be found"}
				}
			}, status: 404
		end		
	end

end

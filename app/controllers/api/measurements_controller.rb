class Api::MeasurementsController < ApplicationController

	before_action :authenticate_user
	before_action :set_measurement, only: [:show, :update, :destroy]

	def index
		@measurements = current_user.measurements
		render json: @measurements, status: 200
	end

	def create
		@measurement = current_user.measurements.build(measurement_params)
		if @measurement && @measurement.save
			render json: @measurement, status: 201
		else
			render_errors_in_json
		end
	end

	def show
		render json: @measurement
	end

	def destroy
		@measurement.destroy
	end


	private

	def measurement_params
		params.require(:measurement).permit(:user_id, :systolic_bp, :diastolic_bp, :pulse, :date_time, :notes)
	end

	def render_errors_in_json
		render json: { 
			errors: { 
				messages: @measurement.errors.messages 
			}
		}, status: 422
	end

	def set_measurement
		@measurement = Measurement.find_by(id: params[:id])
		if !@measurement
			render json: {
				errors: {
					messages: { measurement: "can't be found"}
				}
			}, status: 404
		end		
	end
end
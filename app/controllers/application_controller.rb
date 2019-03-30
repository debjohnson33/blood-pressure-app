class ApplicationController < ActionController::API
	#include Knock::Authenticable
	#before_action :authenticate
	include ::ActionController::Cookies
end

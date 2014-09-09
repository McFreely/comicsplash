module Api::V1
	class BaseController < ApplicationController
		respond_to :json
		before_action :default_json

		def current_user
			return nil unless params[:auth_token]
			User.find_by authentication_token: params[:auth_token]
		end

		protected

		def default_json
			request_format = :json if params[:format].nil?
		end

		def auth_only!
			render json: {}, status: 401 unless current_user
		end
	end
end

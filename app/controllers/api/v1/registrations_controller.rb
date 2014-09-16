module Api::V1
	class RegistrationsController < BaseController
		def create
			user = User.new(user_params)

			if user.save
				render :json => user.as_json(:auth_token=>user.authentication_token, :email=>user.email), :status=>201
				return
			else
				render_validation_errors user.errors
			end
		end

		private

		def user_params
			params.permit(:email, :password)
		end

		def render_validation_errors errors
		  render json: {errors: errors.to_h}, status: 422
		end
	end
end
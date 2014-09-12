module Api::V1
	class UsersController < BaseController
		# before_action :auth_only!, only: [:index, :show]

		def index
			if params[:ids]
				@users = User.find(params[:ids])
			else
				@users = User.all
			end
			respond_with @users
		end

		def show
      @user = User.find(params[:id])
      respond_with @user
    end

		def create
			user_params = params.require(:user).permit(:email,:password, :username)
			@user = User.new(user_params)

			if @user.save
				render json: { user: @user }, status: :created
			else
				respond_with @user
			end
		end
	end
end

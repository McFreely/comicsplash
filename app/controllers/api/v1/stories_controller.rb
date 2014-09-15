module	Api::V1
	class StoriesController < BaseController
		before_action :auth_only!, only:  [:update, :destroy]

		def index
			respond_with Story.all
		end

		def show
			@story = Story.find(params[:id])
			respond_with @story
		end

		def create
			@story = Story.new(story_params)
			if @story.save
				render json: { story: @story }, status: :created
			else
				respond_with @story
			end
		end

		def update
			respond_with story.update(story_params)
		end

		def destroy
			respond_with story.destroy
		end

		private

		def story
			Story.find(params[:id])
		end

		def story_params
			params.require(:story).permit(:title, :link, :user_id)
		end
	end
end

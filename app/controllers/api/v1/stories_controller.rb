module	Api::V1
	class StoriesController < BaseController
		before_action :auth_only!, only: [:create, :update, :destroy]

		def index
			respond_with Story.all
		end

		def show
			respond_with story
		end

		def create
			respond_with :api, :v1, Story.create(story_params)
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
			params.require(:story).permit(:title, :link)
		end
	end
end
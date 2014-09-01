namespace :db do
	task populate: :environment do

		Story.destroy_all

		30.times do
			Story.create(
				title: Faker::HipsterIpsum.words(rand(6..16)).join(' '),
				link: Faker::Internet.http_url
				)
		end
	end
end
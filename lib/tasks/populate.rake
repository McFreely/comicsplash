namespace :db do
	task populate: :environment do

		Story.destroy_all
		User.destroy_all

		30.times do
			Story.create(
				title: Faker::HipsterIpsum.words(rand(6..10)).join(' '),
				link: Faker::Internet.http_url
				)
		end

		User.create([
			{email: 'foo@example.com', password: 'foopassword'}
		])

	end
end
namespace :db do
	task populate: :environment do

		Story.destroy_all
		User.destroy_all

		30.times do
			Story.create(
				title: Faker::HipsterIpsum.words(rand(6..10)).join(' '),
				link: Faker::Internet.http_url,
				user_id: 2
				)
		end

		User.create([
			{email: 'foo@example.com', username: 'admin', password: 'foopassword'},
			{email: 'duchess@isis.com', username: 'Sterling_Archer', password: 'lanaiscute'}
		])

	end
end

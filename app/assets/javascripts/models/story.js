App.Story = DS.Model.extend({
	title: DS.attr('string'),
	link: DS.attr('string'),
	created_at: DS.attr('date')
})
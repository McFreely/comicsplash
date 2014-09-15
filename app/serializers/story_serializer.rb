class StorySerializer < ActiveModel::Serializer
  embed :ids, :include => true
  attributes :id, :link, :title, :created_at
  has_one :user
end

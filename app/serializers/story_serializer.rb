class StorySerializer < ActiveModel::Serializer
  attributes :id, :title, :link, :created_at
end

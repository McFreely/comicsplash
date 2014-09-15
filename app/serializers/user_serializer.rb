class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username
  has_many :stories, embed: :ids, include: false
end

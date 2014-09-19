class Story < ActiveRecord::Base
  belongs_to :user

  validates :link, presence: true
  validates :title, presence: true
end

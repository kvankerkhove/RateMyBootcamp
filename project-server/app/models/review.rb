class Review < ActiveRecord::Base
    belongs_to :bootcamp
    belongs_to :user
    has_many :comments
    has_many :commenters, through: :comments
end
class Review < ActiveRecord::Base
    belongs_to :bootcamp
    belongs_to :user
end
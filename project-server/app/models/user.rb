class User < ActiveRecord::Base
    has_many :reviews
    has_many :bootcamps, through: :reviews
end
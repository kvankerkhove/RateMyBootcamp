class User < ActiveRecord::Base
    has_many :reviews
    has_many :bootcamps, through: :reviews
    has_many :comments
    has_many :commentees, through: :comments
end
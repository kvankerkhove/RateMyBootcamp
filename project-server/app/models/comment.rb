class Comment < ActiveRecord::Base
    belongs_to :commenter, :class_name => "User", :foreign_key => "user_id"
    belongs_to :commentee, :class_name => "Review", :foreign_key => "review_id"
end
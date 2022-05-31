class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :star_rating
      t.string :comment
      t.timestamp :created_at
      t.integer :user_id
      t.integer :bootcamp_id
    end
  end
end

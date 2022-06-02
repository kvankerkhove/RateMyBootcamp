class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :text
      t.integer :user_id
      t.integer :review_id
    end
  end
end

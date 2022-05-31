class CreateBootcamps < ActiveRecord::Migration[6.1]
  def change
    create_table :bootcamps do |t|
      t.string :name
      t.string :image
      t.string :description
    end
  end
end

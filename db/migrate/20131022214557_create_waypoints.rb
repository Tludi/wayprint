class CreateWaypoints < ActiveRecord::Migration
  def change
    create_table :waypoints do |t|
      t.string :name
      t.string :location
      t.text :wayprint
      t.float :lat
      t.float :lng
      t.integer :trip_id

      t.timestamps
    end
  end
end

class AddNumberInStockToItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :number_in_stock, :integer
  end
end

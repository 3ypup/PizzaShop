class AddProducts < ActiveRecord::Migration[5.1]
  def change

  	Product.create 	:title => "Hawaiian", 	:descrtiption => "This is Hawaiian Pizza!!", :price => 350, :size => 30, :is_spicy => false, :is_veg => false, :is_best_offer => false, :path_to_photo => "/images/pizza1.jpg"
 	Product.create 	:title => "Pepperony", 	:descrtiption => "This is Pepperony Pizza!!", :price => 450, :size => 35, :is_spicy => true, :is_veg => false, :is_best_offer => false, :path_to_photo => "/images/pizza2.jpg"
  	Product.create 	:title => "Vegetarian", :descrtiption => "This is Vegetarian Pizza!!",:price => 400,:size => 35,:is_spicy => false,:is_veg => true,:is_best_offer => false,:path_to_photo => "/images/pizza3.jpg"

  end
end

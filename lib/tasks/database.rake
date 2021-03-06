namespace :database do
  desc "creates fake product data"
  task create_data: :environment do
    dep1 = Department.create(name: Faker::Commerce.department )
    dep2 = Department.create(name: Faker::Commerce.department )
    dep3 = Department.create(name: Faker::Commerce.department )
    10.times do
      i = Item.create(department_id: dep1.id, 
        name: Faker::Commerce.product_name, 
        price: Faker::Commerce.price,
        description: Faker::Lorem.sentence,
        number_in_stock: rand(1000) )
      10.times do Review.create(item_id: i.id, 
        title: Faker::Dessert.topping,
        author: Faker::Movies::Lebowski.character,
        body: Faker::Lorem.paragraph,
        rating: rand(1..5)
        )
      end
    end
    10.times do
      i = Item.create(department_id: dep2.id, 
        name: Faker::Commerce.product_name, 
        price: Faker::Commerce.price,
        description: Faker::Lorem.sentence,
        number_in_stock: rand(1000) )
      10.times do Review.create(item_id: i.id, 
        title: Faker::Dessert.topping,
        author: Faker::Movies::Lebowski.character,
        body: Faker::Lorem.paragraph,
        rating: rand(1..5)
        )
      end
    end
    10.times do
      i = Item.create(department_id: dep3.id, 
        name: Faker::Commerce.product_name, 
        price: Faker::Commerce.price,
        description: Faker::Lorem.sentence,
        number_in_stock: rand(1000) )
      10.times do Review.create(item_id: i.id, 
        title: Faker::Dessert.topping,
        author: Faker::Movies::Lebowski.character,
        body: Faker::Lorem.paragraph,
        rating: rand(1..5)
        )
      end
    end

  end

end

namespace :database do
  desc "creates fake product data"
  task create_data: :environment do
    dep1 = Department.create(name: Faker::Commerce.department )
    dep2 = Department.create(name: Faker::Commerce.department )
    dep3 = Department.create(name: Faker::Commerce.department )
    10.times do
      Item.create(department_id: dep1.id, 
        name: Faker::Commerce.product_name, 
        price: Faker::Commerce.price,
        description: Faker::Lorem.sentence )
    end
    10.times do
      Item.create(department_id: dep2.id, 
        name: Faker::Commerce.product_name, 
        price: Faker::Commerce.price,
        description: Faker::Lorem.sentence )
    end
    10.times do
      Item.create(department_id: dep3.id, 
        name: Faker::Commerce.product_name, 
        price: Faker::Commerce.price,
        description: Faker::Lorem.sentence )
    end

  end

end

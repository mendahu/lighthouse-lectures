# # my_name = "Jake"

# # print my_name
# # puts my_name
# # puts(my_name)

# # # THIS IS A COMMENT

# # =begin
# # this is a comment!!!
# # on another line!
# # =end

# # my_name = nil
# # # this is no undefined

# # puts my_name

# # Name = 'Jim'
# # puts Name

# # Name = "5"

# # puts 5.to_s

# # name2 = my_name
# # name2 = "Banana"
# # puts name2
# # puts my_name


# # puts 2 == "2"
# # puts (1..5) === 3
# # puts 3 === (1..5)

# # puts 3 === 3

# # if (3 < 5)
# #   puts "it's lesss!"
# # else
# #   puts "it's more"
# # end

# # unless (5 < 3) 
# #   puts "it's less!"
# # end

# # hour = 6
# # puts "good evening" if hour > 5

# # sunny = true
# # puts "wear a rain jacket"  unless sunny

# # name = "Jake" === "Jim" ? "is the same" : "not the same"
# # puts name


# # i = 0
# # loop do
# #   i += 1
# #   puts i 
# #   break if i > 5
# # end

# # do end # { }

# # i = 0
# # while i < 5 do
# #   i += 1
# #   puts i
# # end

# # i = 0
# # until i > 5 do
# #   i += 1
# #   puts i
# # end

# # names = ["Jake", "Jim"]
# # for name in names do
# #   puts name
# # end

# (5..10).each do |num|
#   puts num
# end

# # # [5, 6, 7, 8, 9, 10].forEach((num) => {
# # #   console.log(num)
# # # })

# # 10.times { puts "hello!"}

# def say_hello name
#   puts "Hello #{name}" # ${}
# end

# say_hello "Jake"
# say_hello("Jim", "Jake")

# def change_my_val val
#   val = 5
# end

# num = 10

# puts num

# change_my_val(num)

# puts num








# user = {
#   "username" => "jakerobins",
#   "password" => "rubyrulez",
#   "logged_in" => false
# }

# # puts user

# puts user["logged_in"]

# user = {
#   username: "jakerooney",
#   password: "rubyhaslotsofways",
#   logged_in: true
# }

# # puts user
# # puts user["logged_in"]

# user = {
#   :username => "jakerobins",
#   :password => "rubyrulez",
#   :logged_in => false
# }

# Key = "logged_in"

# puts user[:username]


# BLOCKS AND LAMBDAS

dogs = ["Shepherd", "Labradoodle", "The one with a bad face"]

# dogs.each do |dog| puts dog end

# dogs.each { |dog| puts dog }

# Lambda is a named block

# do_thing = lambda { |dog| puts dog }

# dogs.each &do_thing

# my_lambda = lambda { puts "Hello! "}

# def my_method(&block)
#   block.call
# end

# my_method &my_lambda

# my_method do 
#   puts "What's up block"
# end

# my_lambda.call

# def my_other_method myArg
#   yield myArg + 1
#   yield myArg + 2 
#   yield myArg + 3
# end

# my_other_method 5 do |num| 
#   puts "What's up block #{num}"
# end

# # JS version

# function myFunction(val, cb) {
#   cb(val + 1)
#   cb(val + 2)
#   cb(val + 3)
# }

# myFunction(5, (val) => {
#   console.log(`What's up block ${val}`)
# })

# Classes

class Car
  # attr_reader :color
  # attr_writer :color
  attr_accessor :color, :year, :model
  def initialize color, year, model
    @color = color
    @year = year
    @model = model
  end

  # def color
  #   @color
  # end

  # def color=(color)
  #   @color = color
  # end
end

car = Car.new("red", 2023, "carolla")
other_car = Car.new("green", 1976, "Ford pickup")

puts car.color
car.color = "magenta"
puts car.color

puts car.model
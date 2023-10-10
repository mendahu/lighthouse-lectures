# methods (functions)

# methods are not first-class citizens
# you can't jsut pass methods around like functions
# (kind of) aren't callback methods
sum = 4 + 5
# Global.add(4, 5)

# method definition
def say_hello name
  puts "hello #{name}, nice to meet you"
end

say_hello "bob"
say_hello("joe")

# say_hello("joe", "bob")

# methods in Ruby have an implicit return
def full_name(first_name, last_name)
  # more logic
  first_name + " " + last_name
end

puts full_name("Ada", "Lovelace")

# arguments are passed by value in Ruby
def change_it val
  val = 5
end

num = 10
puts num
change_it(num)
puts num
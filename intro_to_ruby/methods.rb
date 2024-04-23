=begin
 
- in Ruby, functions (methods) are NOT first class citizens
- you can't pass methods around like variables*
- 5 + 5 (Global.add(5, 5))

=end

def say_hello name 
  puts "hello #{name}, nice to meet you"
end

say_hello "Bob"
say_hello("Jake")
# say_hello("Jake", "Jim")

def full_name first_name, last_name = 'Robins'
 # implicit return on last line
  first_name + " " + last_name
end

puts full_name "Jake"

# arguments are passed as values

def change_it val
  val = 5
  puts val
end

num = 10
change_it num
puts num




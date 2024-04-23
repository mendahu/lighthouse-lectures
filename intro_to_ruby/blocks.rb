# Blocks and Lambdas
# Blocks are similar to callbacks

dogs = ['Odie', 'Lassie', 'Beethoven']

dogs.each do |dog|
  puts dog
end

dogs.each { |dog|
  puts dog
}

# Lambda is a named block = so you can define and reuse them

do_thing = lambda { |dog| puts dog }

dogs.each &do_thing
dogs.each &do_thing # can be reused

say_something = lambda do puts "I'm giving up on you" end

def my_method &banana 
  # do some stuff first
  banana.call 
  # do some other stuff
end

my_method &say_something

def my_yield_method 
  yield 1
end

my_yield_method { |num| puts num }
# my_yield_method # will not work

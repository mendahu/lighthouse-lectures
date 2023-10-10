# blocks and lambdas (procs too???)

# trickiest concepts you're going to encounter in this module 

# replacements for callbacks

# block defins a chunk of code to be executed

dogs = ["Odie", "Lassie", "Old Yeller"]

dogs.each do |dog|
  puts dog
end

dogs.each { |dog|
  puts dog
}

# dogs.forEach((dog) => { console.log(dog)})


# lambdas

# lambdas are named blocks, so they allow you to predefine and reuse blocks

do_thing = lambda { |dog| puts dog } #lambda definition
do_thing2 = -> (dog) { puts dog } # alternate syntax, lambda literal wooowww JS much??

dogs.each &do_thing

# defining methods to take in lambda

def my_method(&block)
  # do some stuff
  block.call
  # callback()
end

say_something = -> { puts "I'm giving up on you"}

my_method &say_something
my_method(&say_something)

my_method ## will throw

# yield

def my_yield_method 
  yield 1
end

my_yield_method { |num|  puts num}
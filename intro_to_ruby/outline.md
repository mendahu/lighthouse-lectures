# Intro to Ruby

## Why Learn Ruby

- let's start with a bit of a discussion about this module in general
- Module 9 is Ruby and Rails - it's the last module before your final, and it's very different from the other modules which were all JavaScript architecture
- Discussion question - what do you think your learning objectives are from this module?

(LISTEN FOR)

- Learn Ruby - yea sort of but not really
- Learn Rails - ok sort of but not really
- Work in an uncomfortable environment
- Read others' code
- Work on an existing app which you didn't write from scratch
- Learn how to prioritize and get through a feature
- Learn how to work with a tech you don't know/understand
- Learn how to bridge and extend the knowledge you have into the knowledge you don't
- This is what your first job is going to look like

- Keep this in mind as you progress through the module. This is about as close to practice as we can give you for your first few months on the job.

- I am not a Ruby developer, I've never used it professionally or even on a personal project beyond just "do this in ruby because you want to practice ruby"
- I could fix this but I kind of like the tension is adds to my job as an instructor and a mentor - I think there is value in seeing me not know things and trying to solve it

### Strategies for handling this

- Docs are your friend
- Seek Breadth, not depth
- Have confidence - you know more of this already than you think you do

### LSD

- Logic Syntax Data
  - You already know the logic and the data - they're the same
  - So this is just applying new syntax

## Ruby Design Principles

- Interpreted language - it was conceived as being a scripting language
- Object-Oriented but supports multiple programming paradigms
- Dynamically Typed like JS
- Designed to be easy to read and human centric and fun!
- Everything is an object
- All functions are actually methods of an object, and methods declared at the global scope are just methods of a global object
- Synchronous (no callbacks/promises) but has a concurrency model

## Similarities and differences with JS

- SAME: Intrepreted, dynamically typed, scripting, same age
- DIFF: Ruby has concurrency, inheritance vs prototype

## Ruby Basics & Syntax

- ruby version managers - rvm and rbenv, act like nvm
- ruby files end in .rb
- variables are generally named in snake_case convention rather than camelCase

### printing

```rb
print "something"
puts "something else"
```

### commenting

```rb
# single line comment

=begin
mutli
line
comment
=end
```

### variables

```rb
# no need for const or let
name = 'Jake'

# dynamically typed
name = nil # this is ruby's null, there is no undefined

# constants are just capitalized
Name = 'Jake'
Name = 7 # ERROR
```

- Discussion - what do we think about the const/let vs lowercase/capitalized?
- I want you to ask yourself this question constantly while you're learning Ruby
- Compared to JS, do you like the Ruby syntax more or less? Why? See if you can form some opinions, and have reasons behind them
- this is not because I want you to be opinionated (humans dont need encouragement for that) - but because I want you to think criticaly about design choices in the languages. It will help you understand them better.

### equality checks

```rb
puts 2 == '2' # false
```

- JS has type coercion and they needed this middle ground equality but most programming languages don't have that, so == is sufficient
- === does something else

### conditionals

```rb
# if statements use roughly the same syntax
if (3 < 5)
  puts "it's less!"
else
  puts "it's more"
end

# end is clutch
```

- end vs `})`, thoughts?
- `elsif`
- `unless` syntactically different but same as !=
- human readable - follows the ruby design principle - thoughts?

```rb
# reverse if
puts "good evening" if hour > 5
puts "wear a rain jacket" unless sunny
```

- ternaries the same

### loops

- this reverse syntax is visible in the loops too

```rb
# break
i = 0
loop do
  i += 1
  puts i

  # exit the loop
  break if i > 5 # prints 1 through 6
end

# while
i = 0
while i < 5 do # prints 1 through 5
  i += 1
  puts i
end

# until
i = 0
until i > 5 do # prints 1 through 6
  i += 1
  puts i
end
```

- for in == for of in Ruby
- Array methods - there's a lot!
- Docs
- talk about implementation of array methods and when a language chooses to do it
- Go vs JS vs Ruby

```rb
(5..10).each do |num|
  puts num
end

10.times { puts "hello world" }
```

- How would we do this in JS? Do you wish this was in JS?

### methods

- Unlike JS, methods are not first class citizens, you can't pass them around like functions or callbacks
- Everything is an object in Ruby, and so most logic is a method (like how operators are just methods, `+` is just `add(x, y)`)
- Implicit Return
- ? or ! notation - ? returns boolean, ! mutates

```rb
# writing our own methods
def say_hello name # starts with a definition
  puts "hello #{name}, nice to meet you"
end

# invoke with or without parens
say_hello "Bob"
say_hello("Bob")

# calling a method with too many/too few arguments will result in an error
say_hello("Bob", "Hoskins")

# methods in ruby have implicit return
def full_name(first_name, last_name)
  first_name + " " + last_name
end
puts full_name('Ada', 'Lovelace') # "Ada Lovelace"

# arguments are passed by value
def change_it(val)
  val = 5
end
num = 10
puts num # 10
change_it(num)
puts num # 10
```

### hashes

- liks JS objects
- key value pairs, associative array

```rb
user = {
  "username" => "johns",
  "password" => "1234",
  "logged_in" => false
}
puts user
# access properties with square brackets
puts user["logged_in"] # false

# symbols
# "a string that you can't change"
# perfect as keys for hashes
user = {
  :username => "adal",
  :password => "5678",
  :logged_in => true
}
puts user[:logged_in] # true

# and even better short-hand
user = {
  username: "bobh",
  password: "password",
  logged_in: true
}
puts user[:username] # "bobh"

# what about dynamic keys?
my_key = 'username'
user[my_key] # nil
# convert the string to a symbol
user[my_key.to_sym] # 'bobh'
```

## Blocks and Lambdas

- Probably the trickiest concepts you're going to encounter in the Ruby curriculum here
- Blcosk are anonymous functions which can be passed into methods
  - serve the same role as a callback in JS

```rb
# blocks define a chunk of code to be executed
# can be do..end or {}
dogs = ["Odie", "Lassie", "Dioji"]

dogs.each do |dog|
  # inside a block
  puts dog
end

dogs.each { |dog|
  # also inside a block
  puts dog
}
```

- Lambdas are named blocks, so allow you to predefine and reuse blocks

```rb
do_thing = lambda { |dog| puts dog } # lambda keyword
do_thing = -> { |dog| puts dog } #lambda literal

dogs.each &do_thing # call this lambda as the 'callback' for each


# defining a method that takes a lambda
say_something = -> { puts "I'm giving up on you" }

def my_method(&block)
  block.call # .call to invoke the block
end
my_method &say_something # w/o parens
my_method(&say_something) # w/ parens

def my_yield_method
  yield 1
end

my_yield_method { |num| puts num }
```

- Discussion on JS vs Ruby again

## Classes

- You will probably use classes a lot in Ruby
- Ruby is an Object oriented programming language first, so classes are fundamental components to it
- syntax for defining and instantiating them is similar to JS

```rb
class Car
 def initialize (color, year, model)
   @color = color
   @year = year
   @model = model
 end
end

my_car = Car.new("red", 2007, "matrix")
```

- In Object Oriented programming, its common to protect internal state and limit what has access to it, read or write. By default values in a class are inaccessible

```rb
class Car
  def initialize
    @color = "red"
  end
end

car = Car.new
# puts car.color
car.color = "green"
```

- you can set methods to do it or use a special shorthand

```rb
class Car
 attr_accessor :color
 attr_reader :year
 attr_writer :model
 def initialize (color, year, model)
   @color = color
   @year = year
   @model = model
 end
end

# equivalent to
class Car
 def initialize (color, year, model)
   @color = color
   @year = year
   @model = model
 end
 def color
   @color
 end
 def color=(value)
   @color = value
 end
 def year
   @year
 end
 def model=(value)
   @model = value
 end
end
```

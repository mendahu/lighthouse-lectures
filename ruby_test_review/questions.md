# <<-CHALLENGE00

At the bottom of this file, create a Calculator class.

Calculator#sum should have one instance method called sum.

It should take in two arguments and return their sum, plain and simple.

# <<-CHALLENGE01

Create a class called Superhero which takes in a name for constructing instances:

s = Superhero.new("Lady Fairplay")

Once created, we should be able to access their given name again:

s.name # ==> "Lady Fairplay"

# <<-CHALLENGE02

Copy the same Superhero class from the previous question.

For this challenge, make a Superhero's name updatable after it is created:

s.name = "Arm-Fall-Off Boy"

# <<-CHALLENGE03

Here's an existing class representing a poker hand.

It has a method `cards` which returns an array of the cards in hand.

It's always the same hand, we know. That's not practical, but hey this is a test, not a real game.

Your mission:
Create another method in this class called `to_s` which will return a string of the cards.

The string should look like this:
"- 6♠ - 3♦ - A♣ - J♦ - J♥ -"
(the double quotes should not be included; they're included here to that it's a string)

While you're at it, make the cards method private.

```ruby
class PokerHand
  # Returns an array of 5 cards in player's hand:
  # =>  Eg: ['6♠', '3♦', 'A♣', 'J♦', 'J♥']
  def cards
    %w(6♠ 3♦ A♣ J♦ J♥)
  end

  # IMPLEMENT to_s
end
```

# <<-CHALLENGE04

There exists a Person class in this file. It has a full_name method which can return the person's full name based on their provided first and last names. Mind blowing, eh?

We need to support doctors... Create a Doctor class which inherits the Person class. It should have the same constructor, but when full_name is called, it should return their full name prepended with "Dr. "

Example:
p = Person.new("Joy", "Halliday")
p.full_name # ==> "Dr. Joy Halliday"

Do not modify the Person class at all.

```ruby
class Person

  def initialize(first_name, last_name)
    @first_name = first_name
    @last_name = last_name
  end

  def full_name
    "#{@first_name} #{@last_name}"
  end
end
```

# <<-CHALLENGE05

Given the existing Employee class.

Define a class School (at the bottom of this file) which has a method `train`.
This train method should take in an employee as an argument, and upskill them.

```ruby
class Employee

  def initialize
    @skill_level = 1
  end

  def upskill
    @skill_level += 1
  end

end
```

# <<-CHALLENGE06

Implement the incomplete wrap_array_items method

```ruby
class ArrayFormatter

  # Takes in an array and two args for the left and right side wrapping
  # Returns a new array with string containing the "wrapped" version of each element
  # Example arguments: [1, 2, 3, 4, 5], "<<", ">>"
  # Returns array:     ["<<1>>", "<<2>>", "<<3>>", "<<4>>", "<<5>>"]

  def wrap_array_items(items, left, right)
    # Implement me
  end
end
```

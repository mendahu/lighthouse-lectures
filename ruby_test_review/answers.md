## Challenge 0

- Talk about instance vs class methods

```ruby
# Instance Method
class Calculator
  def sum num1, num2
    num1 + num2
  end
end

# Class Method
class Calculator
  def self.sum num1, num2
    num1 + num2
  end
end
```

## Challenge 1 & 2

- Talk about shorthand for getter and setter with `attr_reader`, `attr_writer`, `attr_accessor`

```ruby
class SuperHero
  attr_reader :name # attr_writer or attr_accessor
  def initialize name
    @name = name;
  end
end

class SuperHero
  def initialize name
    @name = name;
  end

  def name name
    if name
      @name = name
    end
    name
  end
end
```

## Challenge 3

- Talk about string literals, ruby methods

```ruby
class PokerHand
  # IMPLEMENT to_s
  def to_s
    "- #{cards.join(' - ')} -"
  end

  private
  # Returns an array of 5 cards in player's hand:
  # =>  Eg: ['6♠', '3♦', 'A♣', 'J♦', 'J♥']
  def cards
    %w(6♠ 3♦ A♣ J♦ J♥)
  end

end
```

## Challenge 4

- Talk about inherited initializers and methods

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

class Doctor < Person
  def full_name
    "Dr. #{super}"
  end
end
```

## Challenge 5

- Discussion about objects and passing things around

```ruby
class Employee
  attr_reader :skill_level

  def initialize
    @skill_level = 1
  end

  def upskill
    @skill_level += 1
  end

end

class School
  def train employee
    employee.upskill
  end
end
```

## Challenge 6

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

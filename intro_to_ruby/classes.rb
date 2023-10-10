# classes 

class Car
  def initialize (color, year, model)
    # do stuff with args
    # this.color = color
    @color = color  #instance variable @
    @year = year
    @model = model
  end
end

my_car = Car.new("red", 2007, "matrix")

# in ruby, all instance variables are by default protected

# my_car.color #throws


class Car2
  def initialize (color, year, model)
    # do stuff with args
    # this.color = color
    @color = color  #instance variable @
    @year = year
    @model = model
  end

  def color #getter
    @color
  end

  def color=(value) #setter
    @color = value
  end
end

my_car2 = Car2.new("green", 2015, "sunfire")

puts my_car2.color
my_car2.color = "purple"
puts my_car2.color

# short cuts
class Car3
  attr_reader :color #getter
  attr_writer :color #setter
  attr_accessor :color #getter and a setter
  def initialize (color, year, model)
    # do stuff with args
    # this.color = color
    @color = color  #instance variable @
    @year = year
    @model = model
  end
end

my_car3 = Car3.new("pink", 1996, "beetle")
puts my_car3.color

class Sedan < Car3
  def initialize(doors, color, year, model)
    super color, year, model
    @doors = doors
  end
end

my_sedan = Sedan.new(3, "magenta", 2012, "explorer")
puts my_sedan.color
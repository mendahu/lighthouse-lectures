class Car 
  # attr_reader :color
  # attr_writer :color
  attr_accessor :color
  def initialize (color, year, model)
    @color = color
    @year = year
    @model = model
  end

  # def color # getter
  #   @color
  # end

  # def color=(value) #setter
  #   @color = value
  # end

  # def set_color value
  #   @color = value
  # end


end

my_car = Car.new("red", 2007, "matrix")
puts my_car.color
my_car.color = "green"
puts my_car.color

# my_car.set_color "purple"
# puts my_car.color



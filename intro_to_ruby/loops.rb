# loops

i = 0
loop do
  i += 1
  puts i

  break if i > 5
end

# while

i = 0
while i < 5 do
  i += 1
  puts i
end

# until 

i = 0
until i > 5 do
  i += 1
  puts i
end

myArray = [1, 2, 3]

for number in myArray do
  puts number
end

# .forEach, .filter, .map, .sort, .find
# a lot of array methods in ruby

(5..10).each do |num|
  puts num
end

10.times { puts "hello world"}

# JS equiv Array(10).fill(null).forEach(() => {})




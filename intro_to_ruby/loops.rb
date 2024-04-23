i = 0
loop do
 # do stuff

 i += 1
 puts i

 break if i > 5
end

j = 0
while j < 5 do
  j += 1
  puts j
end

k = 0
until k > 5 do
  k += 1
  puts k
end 

names = ['jake', 'jim']

for name in names do
 puts name
end

names.each do |name|
  puts name
end

(5..10).each do |num|
  puts num
end

10.times do puts "hello" end

5.times {
  puts "hello world"
}
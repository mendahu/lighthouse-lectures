# like JS Objects - called Hashes
# Other words might include Dictionary, Maps/Structs

user = {
  "username" => "john",
  "password" => "1234",
  "logged_in" => false
}

puts user["username"]
# puts user.username # no good
my_other_key = "password"
puts user[my_other_key]

user2 = {
  :username => "jake",
  :password => "5678",
  :logged_in => false
}

puts user2[:username]
# puts user2.username # no good

user3 = {
  username: "bob",
  password: "9012",
  logged_in: false,
}

puts user3[:username]

my_key = "username"

puts user3[my_key.to_sym]

count = {
  value: 3
}

def change_it count
  count[:value] = 5
end

puts count[:value] # 3
change_it count
puts count[:value] # 3 or 5?


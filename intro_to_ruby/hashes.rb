# hashes (objects)
# just like JS, these are key value pairs, associative arrays, dictionaries, objects, maps

user = {
  "username" => "john",
  "password" => "1234",
  "logged_in" => false
}

puts user
puts user["username"]

user_with_symbols = {
  :username => "john",
  :password => "1234",
  :logged_in => false
}

puts user_with_symbols[:logged_in]

user_with_symbols_shorthand = {
  username: "john",
  password: "1234",
  logged_in: false,
}

puts user_with_symbols_shorthand[:logged_in]
key = "username"

puts user_with_symbols_shorthand[key.to_sym]


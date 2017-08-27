require 'firebase'

base_uri = 'https://rsvp-valeria-romain.firebaseio.com/'

firebase = Firebase::Client.new(base_uri)

response = firebase.push("todos", { :name => 'Pick the milk', :priority => 1 })
p response.success? # => true
p response.code # => 200
p response.body # => { 'name' => "-INOQPH-aV_psbk3ZXEX" }
p response.raw_body # => '{"name":"-INOQPH-aV_psbk3ZXEX"}'

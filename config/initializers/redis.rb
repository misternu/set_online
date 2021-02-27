if ENV["REDISCLOUD_URL"]
  $redis = Redis.new(:url => ENV["REDISCLOUD_URL"])
end

if Rails.env.development?
  $redis = Redis.new(host: 'localhost', port: 6379, db: 0)
end

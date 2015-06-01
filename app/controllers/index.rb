get '/' do
  @user = TwitterUser.find_or_create_by(username: "nikesb")
  if @user.tweets.empty? || @user.tweets_stale?
    @user.fetch_tweets!
  end
  @tweets = @user.tweets.last(10)
  erb :index
end
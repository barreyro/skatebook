class TwitterUser < ActiveRecord::Base
  has_many :tweets

  def tweets_stale?
    Time.new - self.tweets.last.updated_at >= 900
  end

  def fetch_tweets!
    CLIENT.user_timeline(self.username).each do |tweet|
      self.tweets.create(text: tweet.text)
    end
  end

end
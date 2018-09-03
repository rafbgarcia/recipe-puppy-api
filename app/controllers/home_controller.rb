require 'net/http'

class HomeController < ApplicationController
  def index
  end

  def search
    url = URI.parse("http://www.recipepuppy.com/api/")
    req = Net::HTTP::Get.new(url.to_s)
    res = Net::HTTP.start(url.host) { |http| http.request(req) }
    render json: res.body
  end
end

require 'net/http'

class HomeController < ApplicationController
  def index
  end

  def search
    data = RecipePuppyApi.search(params[:query], (params[:page] || 1).to_i)
    render json: data
  end
end

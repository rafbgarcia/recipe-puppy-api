module RecipePuppyApi
  module_function

  def search(query, get_page = 1)
    [get_page, get_page + 1]
    .map { |page| JSON.parse(Search.request(query, page))["results"] }
    .flatten
  end

  class Search
    def self.request(query, page)
      url = URI.parse(format_url(query, page))
      req = Net::HTTP::Get.new(url.to_s)
      res = Net::HTTP.start(url.host) { |http| http.request(req) }
      res.body
    end

    def self.format_url(query, page)
      ["http://www.recipepuppy.com/api/", '?q=', query, '&p=', page].join
    end
  end
end

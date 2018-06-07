import scrapy

from movie_crawler.items import MovieCrawlerItem

class MOVIEspider(scrapy.Spider):
    name = "RottenTomatoes"
    allowed_domains = ["rottentomatoes.com"]
    start_urls = [
        "https://rottentomatoes.com/top/bestofrt/?year=2017"
    ]
    
    def parse(self, response):
        for path in response.xpath('//*[@id="top_movies_main"]/div/table/tr/td[3]/a/@href').extract():
            url = response.urljoin(path)
            yield scrapy.Request(url, callback = self.parse_page_contents)
            
    def parse_page_contents(self, response):
        item = MovieCrawlerItem()
        item["title"] = response.xpath('//*[@id="heroImageContainer"]/a/h1/text()')[0].extract().strip()
        item["score"] = response.xpath('//*[@id="scorePanel"]/div[2]/div[2]/div[1]/text()')[1].extract().strip().split('/5')[0]
        genre_list=[]
        for genre in response.xpath('//*[@id="mainColumn"]/section[3]/div/div[2]/ul/li[2]/div[2]/a/text()').extract():
            genre_list.append(genre.strip())
        item["genres"] = genre_list
        item["consensus"] = response.xpath('//*[@id="all-critics-numbers"]/div/div[2]/p/text()')[2].extract()[3:].capitalize()
        yield item
        
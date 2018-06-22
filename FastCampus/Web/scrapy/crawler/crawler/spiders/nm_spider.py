import scrapy

from crawler.items import CrawlerItem

class NaverMovieSpider(scrapy.Spider):
    name = "naver_movie"
    allow_domain = ["https://movie.naver.com"]
    start_urls = [
        "https://movie.naver.com/movie/running/current.nhn"
    ]

    def parse(self, response):
        links = response.xpath('//*[@id="content"]/div[1]/div[1]/div[3]/ul/li/dl/dt/a/@href')[:10].extract()
        for link in links:
            link = response.urljoin(link)
            yield scrapy.Request(link, callback=self.page_contents)

    def page_contents(self, response):
        item = CrawlerItem()
        item["title"] = response.xpath('//*[@id="content"]/div[1]/div[2]/div[1]/h3/a[1]/text()')[0].extract()
        try:
            item["count"] = response.xpath('//*[@id="content"]/div[1]/div[2]/div[1]/dl/dd[5]/div/p[2]/text()')[0].extract()
        except:
            item["count"] = "0명"
        yield item

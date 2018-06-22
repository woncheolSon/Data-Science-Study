# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html

import csv

class CrawlerPipeline(object):

    def __init__(self):
        self.csvwriter = csv.writer(open("NaverMoive.csv", "wt")) #NaverMovie.csv 파일 생성
        self.csvwriter.writerow(["title","count"]) #컬럼 한 줄 작성

    def process_item(self, item, spider):
        row = []
        row.append(item["title"])
        row.append(item["count"])
        self.csvwriter.writerow(row)
        return item

# $ pip3 install requests
import requests, json
from datetime import datetime as dt

def send_slack(msg):
    # 슬랙 웹훅 URL
    webhook_URL = "https://hooks.slack.com/services/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"

    # 페이로드 생성
    payload = {
        "channel": "#general",
        "username": "",
        "icon_emoji": ":hugging_face:",
        "text": msg,
    }

    # 전송
    response = requests.post(
        webhook_URL,
        data = json.dumps(payload),
    )

    # 결과
    print(response)

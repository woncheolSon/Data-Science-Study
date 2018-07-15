import requests, json
WEBHOOK_URL = "https://hooks.slack.com/services/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"
def send_slack(msg):
    data = {
        "channel": "#webhook",
        "emoji": ":angry:",
        "msg": msg,
        "username": "날씨봇",
    }
    payload = {
        "channel": data["channel"],
        "username": data["username"],
        "icon_emoji": data["emoji"],
        "text": data["msg"],
    }
    response = requests.post( WEBHOOK_URL, data = json.dumps(payload), )

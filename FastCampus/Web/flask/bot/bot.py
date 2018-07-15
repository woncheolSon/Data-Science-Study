from flask import *
from lib.slack import send_slack
from lib.forecast import forecast

app = Flask(__name__)

# slack outgoing webhook
@app.route("/slack", methods=["POST"])
def slack():
    username = request.form.get("user_name")
    token = request.form.get("token")
    text = request.form.get("text")

    if "날씨" in text:
        summary = forecast()
        send_slack(summary)

    return Response(), 200

app.run()

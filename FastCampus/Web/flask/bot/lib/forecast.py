import forecastio

TOKEN = "c259d4aeb593bc5e83d0c3f7ed916f5d"

def forecast(lat=37.512, lng=126.954):
    forecast = forecastio.load_forecast(TOKEN, lat, lng)
    byHour = forecast.hourly()
    return byHour.summary

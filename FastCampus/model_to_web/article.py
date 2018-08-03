from flask import *
import pickle
import numpy as np

app = Flask(__name__)
app.config.update(
    TEMPLATES_AUTO_RELOAD = True,
)

models = {}

def init():
    with open('./models/classification.pkl','rb') as f:
        models['classification']=pickle.load(f)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict')
def predict():
    result = {'status':200}

    result['category'] = ['정치','경제','사회','생활/문화','세계','IT/과학']
    model = models['classification']
    sentence = request.values.get('sentence')
    result['sentence'] = sentence

    predict_data = np.round_(model.predict_proba([sentence])[0]*100,2)
    result['result'] = list(predict_data)

    print(sentence)

    return jsonify(result)

init()
app.run()

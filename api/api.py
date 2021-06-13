from flask import Flask, request, jsonify, render_template, redirect, session
import pickle


import numpy as np

from flask_cors import CORS

import time






app = Flask(__name__) 
  
model = pickle.load(open('model.pkl', 'rb'))
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/11221122'

output=0
prediction=[]




def prediction(total_area):
    int_features = [int(total_area)]
    final_features = [np.array(int_features)]
    prediction = model.predict(final_features)
    # prediction = model.predict([[110]])
   
    output = round(prediction[0], 2)
    print(type(prediction))
    print(output)
    output=str(output)

    return output




@app.route('/api',methods=['GET'])
def api():
    return{
        'userID':1,
        'title':'Flask React Application',
        'completed':False
    }


@app.route('/predict')
def predict():
    

    if request.method == 'GET':

        
        total_area=request.args.get('TotalArea',None)
        if total_area:
                    
            global output
            output=prediction(total_area)
            # session['output']=output
            # print(session['output'])
            
            return redirect('http://localhost:3000/pricepredictor'),{'output': output}
        


            
            
        
        return {'output': output}
        # return "Please enter area"
    # if request.method == 'POST':

    return '200'


# prediction=predict.output()


@app.route('/predicted',methods=['GET',"POST"])
def get_predict():
    output=str(output)
    print(output)
    return {'output': output}








@app.route('/time')
def get_current_time():
    return {'time': time.time()}



if __name__ == "__main__":
   app.run( debug=True)
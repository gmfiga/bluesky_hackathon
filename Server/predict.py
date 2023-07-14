import sys
import json
import pickle
import pandas as pd

# Load the pre-trained model
with open('model.pkl', 'rb') as f:
    model = pickle.load(f)

# Read data from stdin
data = sys.stdin.read()


# Perform the prediction
df = pd.DataFrame(data, columns=['Glucose'])
predictions = model.predict(df)
print(predictions)

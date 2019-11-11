import json
import requests

print('Please choose between the colors: Red, Blue, Green, and Black:')
color = input()

r = requests.get('http://localhost:3000/%s' % color)
data = r.json()

print(data[0]["name"] + " is %s." % color)

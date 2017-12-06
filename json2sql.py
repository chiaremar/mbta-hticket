import os,sys
import json
from pprint import pprint
f = open('c:\mbta\sqlscript.txt','w')
sys.stdout = f

with open('c:\mbta\commuterrail.json') as data_file:    
    data = json.load(data_file)

#print(len(data))
sqlstr = []
for d in data:
#kv[0] is route or line label
#kv[1] is name of route, name of line or list of names of lines
	for kv in d.items():
#		print(len(kv[0]) ,'\t', len(kv[1]))
#		print(kv[0] ,'\t', kv[1])		
		if kv[0] == 'route':
			route = kv[1]
		if kv[0] == 'line':
			for line in kv[1]:
				print ('INSERT INTO RoutesLinesMap (route, line) VALUES (\'{}\', \'{}\');'.format(route, line ))

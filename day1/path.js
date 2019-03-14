var path = require('path')

var testData ='c:/app/view/godos/add.html';

console.log(path.basename(testData))

testData = path.dirname(testData);
console.log(testData)

console.log(path.basename(testData))
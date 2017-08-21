var tesseract = require('tesseract.js')

var path = require('path');
var image = path.resolve(__dirname, 'images/verify.png');

tesseract.recognize(image)
    .then(data => {
        console.log('then\n', data.text)
    })
    .catch(err => {
        console.log('catch\n', err);
    })
    .finally(e => {
        console.log('finally\n');
    });
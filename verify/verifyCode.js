var Tesseract = require('tesseract.js')

var path = require('path');
var image = path.resolve(__dirname, '../images/cosmic.png');
console.log(image)
Tesseract.recognize(image)
    .progress(function (p) {
        console.log('progress', p)
    })
    .then(function (result) {
        console.log('result', result)
    })

/*Tesseract.recognize(url)
    .progress(message => console.log(message))
    .catch(err => console.error(err))
    .then(result => console.log(result))
    .finally(resultOrError => console.log(resultOrError))*/


/*Tesseract.recognize(image)
    .then(data => {
        console.log('then\n', data.text)
    })
    .catch(err => {
        //console.log('catch\n', err);
    })
    .finally(e => {
        console.log('finally\n');
    });*/

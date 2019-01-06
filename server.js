const express = require('express')
const app = express()

app.set('views', __dirname + '/app/views');
app.set('view engine', 'js');

const options = {
  transformViews: false
}
app.engine('js', require('express-react-views').createEngine(options));

app.get('/', require('./routes').index, function (req, res) {

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

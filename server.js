const express = require('express')
const app = express()
import { composeAPI } from '@iota/core'

app.set('views', __dirname + '/app/views');
app.set('view engine', 'js');

const options = {
  transformViews: false
}
app.engine('js', require('express-react-views').createEngine(options));

app.get('/', require('./routes').index, function (req, res) {
  const iota = composeAPI({
      provider: 'https://potato.iotasalad.org:14265'
  })

  iota.getNodeInfo()
      .then(info => {
        console.log(info)
        console.log('______________')
      })
      .catch(err => {
          console.log(`Request error: ${err.message}`)
      })

  var seed = 'HUEAMEHINZIROGF9XDWZIQKVMHDKBGZKTVTRGGNGUGRMJOEYX9I9NZOEHLNEXIOJMABPYORFHG9TINLSN'
  iota.getAccountData(seed, {
     start: 0,
     security: 2
  })
    .then(accountData => {
      const { addresses, inputs, transactions, balance } = accountData
      console.log(accountData)
    })
    .catch(err => {
      console.log(`Request error: ${err.message}`)
    })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

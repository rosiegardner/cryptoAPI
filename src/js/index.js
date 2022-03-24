import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import Cryptocurrency from './crypto-service.js'

//Input from browser
function clearFields() {
  // $('#crypto').val("");
  // $('#currency').val("");
  $('.showErrors').text(""); 
  $('.showCrypto').text("");
  $('.showAmount').text("");
}

//getElements is our UI to call for a response from the API
function getElements(response, amountEntered) {
  // console.log(response);
  for (let i = 0; i < response.length; i++) {
    if(response[i]) {
      
      $('.showCrypto').append(`The Crypto ${response[i].name} - ${response[i].currency} holds the current value of ${response[i].price * amountEntered}`);
      $('.showCrypto').append('<br></br>');
      $('.showAmount').append(`The amount entered is equal to ${response[i]["1d"].price_change_pct * amountEntered} in ${response[i].name}`);
      $('.showAmount').append('<br></br>');
    } else {
      $('.showErrors').text(`There was an error: ${response.message}`);
    }
  }
}

//async makeApiCall(crypto) calls on our static method in c-service.js
// async function makeApiCall(crypto) {
//   const response = await Cryptocurrency.currencyPop(crypto);
//   // console.log(response[0]);
//   getElements(response);
// }

//Retrieving our data.
$(document).ready(function() {
  $('#cryptoCurrency').click(function() {
    let crypto = $('#crypto').val();
    let currency = $('#currency').val();
    let amount = $('#amount').val();
    clearFields();
    // makeApiCall(crypto);
    Cryptocurrency.currencyPop(crypto, currency, amount) 
      .then(function(response) {
        console.log(response)
        getElements(response, amount);
      });
  });
}); 
// https://api.nomics.com/v1/currencies/ticker?key=" + process.env.NOMICS_API_KEY + "&per-page=100&page=1
// [{"id":"BTC","currency":"BTC","symbol":"BTC","name":"Bitcoin","logo_url":"https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/btc.svg","status":"active","price":"41367.69635729","price_date":"2022-03-20T00:00:00Z","price_timestamp":"2022-03-20T19:27:00Z","circulating_supply":"18989012","max_supply":"21000000","market_cap":"785531682541","market_cap_dominance":"0.4102","num_exchanges":"414","num_pairs":"86255","num_pairs_unmapped":"7402","first_candle":"2011-08-18T00:00:00Z","first_trade":"2011-08-18T00:00:00Z","first_order_book":"2017-01-06T00:00:00Z","rank":"1","rank_delta":"0","high":"67598.55728208","high_timestamp":"2021-11-08T00:00:00Z","1d":{"volume":"24634920819.47","price_change":"-754.65490783","price_change_pct":"-0.0179","volume_change":"-30842226220.37","volume_change_pct":"-0.5559","market_cap_change":"-14287776015.20","market_cap_change_pct":"-0.0179"},"7d":{"volume":"212207808143.71","price_change":"3538.11408517","price_change_pct":"0.0935","volume_change":"-30873318276.88","volume_change_pct":"-0.1270","market_cap_change":"67434739086.16","market_cap_change_pct":"0.0939"},"30d":{"volume":"1010784794502.76","price_change":"1316.18951459","price_change_pct":"0.0329","volume_change":"14004855366.25","volume_change_pct":"0.0141","market_cap_change":"26072005926.55","market_cap_change_pct":"0.0343"},"365d":{"volume":"19596297004055.60","price_change":"-15852.15831294","price_change_pct":"-0.2770","volume_change":"5083567589907.79","volume_change_pct":"0.3503","market_cap_change":"-282157503650.17","market_cap_change_pct":"-0.2643"},"ytd":{"volume":"2561972385448.25","price_change":"-5989.31912433","price_change_pct":"-0.1265","volume_change":"-917205697292.60","volume_change_pct":"-0.2636","market_cap_change":"-110282762213.41","market_cap_change_pct":"-0.1231"}}]





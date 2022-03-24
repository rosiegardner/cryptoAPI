export default class Cryptocurrency {
  static async currencyPop(crypto, currency, amount) {
    try {
      // const postmanUrl = "https://api.nomics.com/v1/currencies/ticker?key=5912500731ce8e577be60dc28d945451ed2616ae&per-page=25&convert=SEK&interval=1d"
      const response = await fetch(`https://api.nomics.com/v1/currencies/ticker?key=${process.env.NOMICS_API_KEY}&ids=${crypto}&per-page=25&convert=${currency}&interval=${amount}`)
      // const response = await fetch(postmanUrl)
      // .then(response => response.json()) <--a problem
      // .then(data => console.log(data)) <--a problem
      if (!response.ok) {
        throw Error (response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  } 
}

// https://api.nomics.com/v1/currencies/ticker?key=5912500731ce8e577be60dc28d945451ed2616ae&per-page=25&convert=SEK&interval=1d

//A website that's returning an API that not currently being rendered to our HTML

// class Cryptocurrency is holding a static async method of currencyPop with parameter of crypto.

// within the static async method, we await fetch our API url and use ".then(response => response.jason())" to parse our JSON file. and retrieve our data (.then(data)).

// Using if statements to throw and catch Error to return a error.message;




// fetch("https://api.nomics.com/v1/currencies/ticker?key=${process.env.API_KEY}&per-page=25")
//   .then(response => response.json())
//   .then(data => console.log(data))
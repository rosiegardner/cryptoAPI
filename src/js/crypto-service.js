export default class Cryptocurrency {
  static async currencyPop(crypto) {
    try {
      console.log(crypto);
      const response = await fetch(`https://api.nomics.com/v1/currencies/ticker?key=${process.env.NOMICS_API_KEY}&ids=${crypto}&per-page=25`)
      .then(response => response.json())
      .then(data => console.log(data))
      if (!response.ok) {
        throw Error (response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}

//A website that's returning an API that not currently being rendered to our HTML

// class Cryptocurrency is holding a static async method of currencyPop with parameter of crypto.

// within the static async method, we await fetch our API url and use ".then(response => response.jason())" to parse our JSON file. and retrieve our data (.then(data)).

// Using if statements to throw and catch Error to return a error.message;




// fetch("https://api.nomics.com/v1/currencies/ticker?key=${process.env.API_KEY}&per-page=25")
//   .then(response => response.json())
//   .then(data => console.log(data))
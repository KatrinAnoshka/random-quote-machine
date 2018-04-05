$(document).ready(function(){

  var quotes = [
    ["The city seen from the Queensboro Bridge is always the city seen for the first time, in its wild promise of all the mystery and beauty in the world.", "- F. Scott Fitzgerald"],
    ["There is something in the New York air that makes sleep useless.", "- Simone de Beauvoir"],
    ["If you want to become a real New Yorker, there’s only one rule: You have to believe New York is, has been, and always will be the greatest city on earth. The center of the universe.", "- Ellen R. Shapiro"],
    ["One belongs to New York instantly, one belongs to it as much in five minutes as in five years.", "- Thomas Wolfe"],
    ["Make your mark in New York and you are a made man.", "-Mark Twain"],
    ["As only New Yorkers know, if you can get through the twilight, you’ll live through the night.", "- Dorothy Parker"],
    ["As for New York City, it is a place apart. There is not its match in any other country in the world.", "- Pearl S. Buck"],
    ["I would give the greatest sunset in the world for one sight of New York’s skyline.", "- Ayn Rand"],
    ["There is no place like it, no place with an atom of its glory, pride, and exultancy.", "- Walt Whitman"]
  ];

  var random;
  var generatedQuotes = [];

  function randomQuote() {
  	do {
    random = Math.floor(Math.random() * quotes.length);/* Stores already generated quotes to avoid repeating */
  	} while (generatedQuotes.indexOf(random) > -1);
  	generatedQuotes.push(random);
  	if(generatedQuotes.length == quotes.length) {generatedQuotes = [];}	/* Start over when all quotes have been generated */
    for (var i = 0; i < quotes.length; i++) {
      document.getElementById("actualQuote").innerHTML = quotes[random][0];
      document.getElementById("actualName").innerHTML = quotes[random][1];
      return quotes[random];
    }
  }
  randomQuote();

  function tweetQuote() {
    window.open('https://twitter.com/intent/tweet?text=' + quotes[random], '', 'width=800, height=600, left=400, top=20');
  }

  document.getElementById('tweetEl').onclick = function() {tweetQuote();}
  document.getElementById('newQuote').onclick = function() {randomQuote();}
  
});
var message = document.querySelector("#sub-heading");
var yourName = document.querySelector(".name");
var output = document.querySelector(".output");
var btn = document.querySelector(".btn");
var guess = document.querySelector(".guess");


// Refactoring with Arrow Function
  var countLetters = (data) => {
  yourName.textContent = data
  var price = data.replaceAll(' ', '').length * 5; // price of each letter

  output.textContent = 'Total:$' + price
}

  guess.oninput = (e) => {
   countLetters(e.target.value)
}


// function countLetters (some_data){
//
//   var price = some_data.replaceAll(' ', '').length * 5; // price of each letter
//   yourName.textContent = some_data
//   output.textContent = 'Total:$'+ price
// }
//
// guess.addEventListener("input", function(e){
//     countLetters(e.target.value)
// });

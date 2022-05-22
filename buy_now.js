var message = document.querySelector("#sub-heading");
var btn = document.querySelector(".btn");
var guess = document.querySelector(".guess");
  var yourName = document.querySelector(".name");
  var output = document.querySelector(".output");

  // guess.oninput = (e) =>{
  //
  //       var urName =  e.target.value;
  //     yourName.textContent = urName;
  //
  //     var outPut = '$' + urName.replaceAll(' ', '').length*5;
  //      output.textContent = outPut;
  // };


  guess.addEventListener("input", function(e){

        var urName =  e.target.value;
      yourName.textContent = urName;


  });

    btn.addEventListener("click", function(e) {
      var outPut = '$' + urName.replaceAll(' ', '').length*5;
       output.textContent = outPut;

  });
  // function buttonAnimation (currentKey) {
  //   var activeButton = document.querySelector ("." + currentKey) ;
  //   activeButton.classList.add ("pressed");
  //   setTimeout(function (){
  //     activeButton.classList.remove ("pressed");
  //   }, 100);
  //
  // }
  //
// // Refactoring with Arrow Function
//   var countLetters = (data) => {
//   yourName.textContent = data
//   var price = data.replaceAll(' ', '').length * 5; // price of each letter
//
//   output.textContent = 'Total:$' + price
// }
//
//   guess.oninput = (e) => {
//    countLetters(e.target.value)
// }

//
// function countLetters (data){
//
//   var price = data.replaceAll(' ', '').length * 5; // price of each letter
//   yourName.textContent = data
//   output.textContent = 'Total:$'+ price
// }
//
// guess.addEventListener("input", function(e){
//     countLetters(e.target.value)
// });


//
// guess.addEventListener("input", function(e){
//
//       var urName =  e.target.value;
//     yourName.textContent = urName;
//
//     var outPut = '$' + urName.replaceAll(' ', '').length*5;
//      output.textContent = outPut;
// });

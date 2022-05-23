var alertMessage = document.querySelector("#sub-heading");
var buyNow = document.querySelector(".btn");
var guess = document.querySelector(".guess");
  var nameSpace = document.querySelector(".name");
  var output = document.querySelector(".output");
  var reFresh = document.querySelector("#btn");


  guess.addEventListener("input", function(){
        nameSpace.textContent = guess.value;


  });


   buyNow.addEventListener ('click', function buyNow(){
  var outPut = guess.value;


if (guess.value === ''){
     output.textContent='Total:$0' ;

} else if (guess.value.length < 16){
  output.textContent='Total:$'+ outPut.replaceAll(' ', '').length*5 ;

  alertMessage.textContent = "🚩Congratulations, you entered a unique letter!"
  alertMessage.style.color = "#CE49BF";

} else if (guess.value.length > 15){
   alertMessage.textContent = "Oops, you have exceeded the number of available letters!"
   alertMessage.style.color = "#B22727";
  }

// else if (guess.value===outPut){
//   output.textContent='Total:$'+ outPut.replaceAll(' ', '').length*5 ;


   });



 reFresh.addEventListener ('click', function resetPlaque(){

    guess.value = '';
    nameSpace.textContent = 'Your Name';
    output.textContent='Total:$0';
   alertMessage.textContent = "You are yet to type in a name";
    alertMessage.style.color = "#68A7AD";
    // window.location.reload();
 });

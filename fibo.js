// Print Fibonacci series based on user input


<script>
function getFibonacciSeries(userInput) {
  var a = 0;
  var b = 1;
  var c;
 
  for(var i=1; i <= userInput; i++){
    console.log(a);
    c = a + b;
    a = b;
    b = c;
  }
}

// Provide input number 

const userInput = prompt("Enter numbers to get Fibonacci series");
getFibonacciSeries(userInput);
</script>

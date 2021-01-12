function checkfizzbuzz1(){
  let single_number = document.getElementById("single_number").value;
  if (single_number % 5 == 0 && single_number % 3 == 0 ){
    document.getElementById("single_number_result").placeholder = "FizzBuzz!";
  } else if (single_number % 3 == 0){
    document.getElementById("single_number_result").placeholder = "Fizz!";
  }else if (single_number % 5 == 0 ){
    document.getElementById("single_number_result").placeholder = "Buzz!";
  }else {
    document.getElementById("single_number_result").placeholder = single_number + "!";
  }
}
function clearword1(){
  document.getElementById("single_number_result").placeholder = "Result";
  document.getElementById("single_number").value = '';
}
function clearword2(){
  document.getElementById("begin_number").value = "";
  document.getElementById("end_number").value = '';
  document.getElementById("result2").textContent = '';
}

function checkfizzbuzz2(){
  document.getElementById("result2").textContent = '';
  let begin_number = document.getElementById("begin_number").value,
      end_number = document.getElementById("end_number").value;
   
      for( i = begin_number; i <= end_number; i++){
        if (i % 5 == 0 && i % 3 == 0 ){
          document.getElementById("result2").innerHTML += "FizzBuzz! "
        } else if (i % 3 == 0){
          document.getElementById("result2").innerHTML += "Fizz! "
        }else if (i % 5 == 0 ){
          document.getElementById("result2").innerHTML += "Buzz! "
        }else {
          document.getElementById("result2").innerHTML+= (i + "! ")
        }
        
        
      }
}
function advance1(){
  clearword1();
  let random_number = Math.floor(Math.random() * 99999);
  document.getElementById("single_number").value = random_number;
  checkfizzbuzz1();
}
function advance2(){
  clearword2();
  let random_number1 = Math.floor(Math.random() * 99),
      random_number2 = Math.floor(Math.random() * 9999);
  while (random_number2 < random_number1){
    random_number2 = Math.floor(Math.random() * 9999);
    if (random_number2 > random_number1){
      break
    }
  }
  document.getElementById("begin_number").value = random_number1;
  document.getElementById("end_number").value = random_number2;
  checkfizzbuzz2();
}
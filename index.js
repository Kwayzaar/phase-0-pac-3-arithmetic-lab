1 + 80; 
60 - 40; 
2 * 3.4; 
5.0 / 2.5; 

let number = 5; 
number++;
number; 
number--;
number;
--number;
number;
++number;
number;

number += 3;
number -= 2;
number *= 10;
number /= 5;

number = 10;
function add5() {
  return number += 5;
}

function divideBy3() {
  return number /=3;
}

divideBy3();
add5();

number = 10;
add5(); 
divideBy3();

parseInt('2', 10);
parseInt('2.2222', 10);
parseInt('nonsense', 10);
parseFloat('80.123999');
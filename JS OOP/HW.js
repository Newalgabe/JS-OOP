// -- Task 1
// let car = {};

// function inputCarInfo() {
//   car.manufacturer = prompt("Enter manufacturer:");
//   car.model = prompt("Enter model:");
//   car.year = parseInt(prompt("Enter year of manufacture:"));
//   car.averageSpeed = parseFloat(prompt("Enter average speed (km/h):"));

//   displayCarInfo();
// }

// function displayCarInfo() {
//   let carInfoDiv = document.getElementById('carInfo');
//   carInfoDiv.innerHTML = `
//     <p><strong>Manufacturer:</strong> ${car.manufacturer}</p>
//     <p><strong>Model:</strong> ${car.model}</p>
//     <p><strong>Year:</strong> ${car.year}</p>
//     <p><strong>Average Speed:</strong> ${car.averageSpeed} km/h</p>
//   `;
// }

// function calculateTime() {
//   let distanceInput = document.getElementById('distance');
//   let distance = parseFloat(distanceInput.value); 
//   let travelTime = distance / car.averageSpeed; 

//   let restTime = Math.floor(travelTime / 4); 
//   let totalTime = travelTime + restTime;

//   alert(`Total travel time: ${totalTime.toFixed(2)} hours`);
// }

// window.onload = inputCarInfo;

// -- Task 2
// function gcd(a, b) {
//     return b === 0 ? a : gcd(b, a % b);
//   }
  
//   let fraction = {
//     numerator: 0,
//     denominator: 1
//   };
  
//   function inputFractions() {
//     fraction.numerator = parseInt(document.getElementById('numerator1').value);
//     fraction.denominator = parseInt(document.getElementById('denominator1').value);
//   }
  
//   function displayResult(result) {
//     let resultDiv = document.getElementById('result');
//     resultDiv.textContent = result;
//   }
  
//   function addFractions() {
//     inputFractions();
//     let numerator2 = parseInt(document.getElementById('numerator2').value);
//     let denominator2 = parseInt(document.getElementById('denominator2').value);
  
//     let newNumerator = fraction.numerator * denominator2 + numerator2 * fraction.denominator;
//     let newDenominator = fraction.denominator * denominator2;
  
//     let commonDivisor = gcd(newNumerator, newDenominator);
//     newNumerator /= commonDivisor;
//     newDenominator /= commonDivisor;
  
//     displayResult(`${newNumerator}/${newDenominator}`);
//   }
  
//   function subtractFractions() {
//     inputFractions();
//     let numerator2 = parseInt(document.getElementById('numerator2').value);
//     let denominator2 = parseInt(document.getElementById('denominator2').value);
  
//     let newNumerator = fraction.numerator * denominator2 - numerator2 * fraction.denominator;
//     let newDenominator = fraction.denominator * denominator2;
  
//     let commonDivisor = gcd(newNumerator, newDenominator);
//     newNumerator /= commonDivisor;
//     newDenominator /= commonDivisor;
  
//     displayResult(`${newNumerator}/${newDenominator}`);
//   }
  
//   function multiplyFractions() {
//     inputFractions();
//     let numerator2 = parseInt(document.getElementById('numerator2').value);
//     let denominator2 = parseInt(document.getElementById('denominator2').value);
  
//     let newNumerator = fraction.numerator * numerator2;
//     let newDenominator = fraction.denominator * denominator2;
  
//     let commonDivisor = gcd(newNumerator, newDenominator);
//     newNumerator /= commonDivisor;
//     newDenominator /= commonDivisor;
  
//     displayResult(`${newNumerator}/${newDenominator}`);
//   }
  
//   function divideFractions() {
//     inputFractions();
//     let numerator2 = parseInt(document.getElementById('numerator2').value);
//     let denominator2 = parseInt(document.getElementById('denominator2').value);
  
//     let newNumerator = fraction.numerator * denominator2;
//     let newDenominator = fraction.denominator * numerator2;
  
//     let commonDivisor = gcd(newNumerator, newDenominator);
//     newNumerator /= commonDivisor;
//     newDenominator /= commonDivisor;
  
//     displayResult(`${newNumerator}/${newDenominator}`);
//   }
  
//   function reduceFraction() {
//     inputFractions();
  
//     let commonDivisor = gcd(fraction.numerator, fraction.denominator);
//     fraction.numerator /= commonDivisor;
//     fraction.denominator /= commonDivisor;
  
//     displayResult(`${fraction.numerator}/${fraction.denominator}`);
//   }
  

// -- Task 3
// let time = {};

// function inputTime() {
//   time.hours = parseInt(prompt("Enter hours:"));
//   time.minutes = parseInt(prompt("Enter minutes:"));
//   time.seconds = parseInt(prompt("Enter seconds:"));

//   if (isNaN(time.hours) || isNaN(time.minutes) || isNaN(time.seconds)) {
//     alert("Invalid input. Please enter valid numbers for hours, minutes, and seconds.");
//     inputTime();
//   } else if (time.hours < 0 || time.hours > 23 || time.minutes < 0 || time.minutes > 59 || time.seconds < 0 || time.seconds > 59) {
//     alert("Invalid input. Hours should be between 0 and 23, minutes and seconds should be between 0 and 59.");
//     inputTime();
//   }
// }

// function displayTime() {
//   alert(`Current Time: ${formatTime(time.hours)}:${formatTime(time.minutes)}:${formatTime(time.seconds)}`);
// }

// function addSeconds() {
//   let addSecondsValue = parseInt(prompt("Enter seconds to add:"));
//   if (!isNaN(addSecondsValue) && addSecondsValue >= 0) {
//     time.seconds += addSecondsValue;
//     normalizeTime();
//     displayTime();
//   } else {
//     alert("Invalid input. Please enter a valid positive number for seconds.");
//     addSeconds(); 
//   }
// }

// function addMinutes() {
//   let addMinutesValue = parseInt(prompt("Enter minutes to add:"));
//   if (!isNaN(addMinutesValue) && addMinutesValue >= 0) {
//     time.minutes += addMinutesValue;
//     normalizeTime();
//     displayTime();
//   } else {
//     alert("Invalid input. Please enter a valid positive number for minutes.");
//     addMinutes(); 
//   }
// }

// function addHours() {
//   let addHoursValue = parseInt(prompt("Enter hours to add:"));
//   if (!isNaN(addHoursValue) && addHoursValue >= 0) {
//     time.hours += addHoursValue;
//     normalizeTime();
//     displayTime();
//   } else {
//     alert("Invalid input. Please enter a valid positive number for hours.");
//     addHours(); 
//   }
// }

// function normalizeTime() {
//   let extraMinutes = Math.floor(time.seconds / 60);
//   time.seconds %= 60;
//   time.minutes += extraMinutes;

//   let extraHours = Math.floor(time.minutes / 60);
//   time.minutes %= 60;
//   time.hours += extraHours;

//   time.hours %= 24; 
// }

// function formatTime(value) {
//   return value < 10 ? '0' + value : value;
// }

// inputTime();

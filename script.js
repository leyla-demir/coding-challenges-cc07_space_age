const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('button');
const resultElement = document.querySelector('p');
const spaceAgeElement = document.querySelector('#space');
const selectElement = document.querySelector('#Planets');
const selectedOption = selectElement.options[selectElement.selectedIndex];

let age

function convertToPlanetYears(val, planet) {
  console.log('convertToEarthYears -> val', val);
  console.log('convertToEarthYears -> planet', planet);
  const earthYear = val / 31557600;
  console.log("convertToEarthYears -> earthYear", earthYear)

  switch (planet) {
    case 'Mercury':
      age = earthYear*0.2408467;
      break
    case 'Venus':
      age = earthYear*0.61519726;
      break
    case 'Earth':
      age = earthYear;
      break
    case 'Mars':
      age = earthYear*1.8808158;
      break
    case 'Jupiter':
      age = earthYear*11.862615;
      break
    case 'Saturn':
      age = earthYear*29.447498;
      break
    case 'Uranus':
      age = earthYear*84.016846;
      break
    case 'Neptune':
      age = earthYear*164.79132;
      break
    }
    return age;
}

buttonElement.addEventListener('click', () => {
  const inputVal = inputElement.value;
  const selectedOption =  
    selectElement.options[selectElement.selectedIndex].text;
  resultElement.innerText = "Your age " + convertToPlanetYears(inputVal, selectedOption).toFixed(2)+ " year" 
  spaceAgeElement.innerText = "In "+selectedOption;;
  
});


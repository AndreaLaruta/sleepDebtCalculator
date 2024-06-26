const getSleepHours = (day) => {
  day = day.toLowerCase();
  switch (day) {
    case 'monday':
      return 8;
    case 'tuesday':
      return 5;
    case 'wednesday':
      return 3;
    case 'thursday':
      return 2;
    case 'viernes':
      return 3;
    case 'saturday':
      return 0;
    case 'sunday':
      return 5;
      break;
  }
};


console.log(getSleepHours('saturday'));

console.log('----------------');

const getActualSleepHours = () => {
  // Call getSleepHours for each day and sum the results
  const totalSleepHours = getSleepHours('monday') +
                          getSleepHours('tuesday') +
                          getSleepHours('wednesday') +
                          getSleepHours('thursday') +
                          getSleepHours('viernes') +
                          getSleepHours('saturday') +
                          getSleepHours('sunday');

  // Implicit return: the value assigned to totalSleepHours is automatically returned
  return totalSleepHours;
};
 
console.log(getActualSleepHours());

console.log('----------------');

const getIdealSleepHours = () =>{
  const idealHours = 8; //ideal hours per night
  return idealHours * 7; //7 days of the week
};

console.log(getIdealSleepHours());
console.log('----------------');

const calculateSleepDebt = () =>{
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if(actualSleepHours === idealSleepHours){
    console.log('Perfect amount of sleep');
  }else if(actualSleepHours > idealSleepHours){
    console.log('the user got more sleep than needed.' + 'You have oversleep ' + (actualSleepHours - idealSleepHours) + ' hrs.');
  }else{
    console.log('the user should get some rest.' + 'You have ' + (idealSleepHours - actualSleepHours) + ' hrs left to sleep.');
  }
};

console.log(calculateSleepDebt());
console.log('----------------');


const getActualSleepHours2 = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;
const getIdealSleepHours2 = idealHours => idealHours * 7;

/*When you call the updated function in calculateSleepDebt(), call it like this:*/

const calculateSleepDebt2 = () => {
 const actualSleepHours = getActualSleepHours2();
  const idealSleepHours = getIdealSleepHours(8);
  if(actualSleepHours === idealSleepHours){
    console.log('Perfect amount of sleep');
  }else if(actualSleepHours > idealSleepHours){
    console.log('the user got more sleep than needed.' + 'You have oversleep ' + (actualSleepHours - idealSleepHours) + ' hrs.');
  }else{
    console.log('the user should get some rest.' + 'You have ' + (idealSleepHours - actualSleepHours) + ' hrs left to sleep.');
  }
};

console.log(calculateSleepDebt2());


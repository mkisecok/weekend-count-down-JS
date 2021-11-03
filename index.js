
 let dateObj = new Date();
 let weekdayNumber = dateObj.getDay();
 ;
 let arrayOfWeekdays=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

 let weekdayName = arrayOfWeekdays[weekdayNumber];

 function leftDay(param)
 { 
     return param == 0 || param == 6  ?

    'Today is weekend!': 

    param == 4 ?

    'Only 1 day left untill weekend!':

    param == 5 ?

    'Tomarrow is weekend!':

     `Only ${5-param} days left untill weekend!`;
 }

 

 const userName = document.querySelector('#formGroupExampleInput') ;

 const label=document.querySelector('#label');

 const button = document.querySelector('#button');

button.onclick = (event) =>
 {

    label.innerText = ` Hello ${userName.value}. Today is ${weekdayName}. ${leftDay(weekdayNumber)}`
    event.preventDefault(); 
 }
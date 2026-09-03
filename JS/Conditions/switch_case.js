//! The JavaScript Switch Statement
day_number = new Date().getDay();
console.log(day_number);

switch(day_number){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    default:
        day = "Looking forward to the Weekend";
}
console.log("Today is "+ day);

//? Common Code Blocks
switch(day_number){
    case 0:
    case 1:
        text = "Soon it is Weekend";
        break;
    case 2:
    case 3:
        text ="It is Working day";
        break;
    default:
        text = "Looking forward to the Weekend";
}
console.log(text);
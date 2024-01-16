//Dates

// const mydate= new Date();/

// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toTimeString());
// console.log(mydate.toUTCString());
// console.log(mydate.toJSON());
// console.log( typeof mydate);

let CreatedDate = new Date(2023,0,5);  //month name start with O(Zero)
let CreatedDate1 = new Date(2023,0,5, 5,2);
let CreatedDate2= new Date("01-16-2024")
let CreatedDate3= new Date("2024-01-16")
 
// console.log(CreatedDate.toDateString());
// console.log(CreatedDate1.toLocaleDateString());


// let myTimestamp= Date.now();
// console.log(myTimestamp);
// console.log(CreatedDate3.getTime());
// console.log(CreatedDate3.getTime()/1000);

let newDate= new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.getHours());

`${newDate.getDate()} and the time`

newDate.toLocaleDateString('default',{
    weekday: "long",  // shortcut key => ctrl+space then more function
})
console.log(newDate);
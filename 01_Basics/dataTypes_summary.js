// DataType => Primitive 
// 7 types= String , Number , boolean, Null, undefined,  Symbol, bigint
let name1= "Milan";
let marks= 89;
let temperatue= 34.23;
console.log(temperatue);
let isChecked= true;
let Data= null;
let goMoon;


let id= Symbol("777");
let secondId= Symbol("777");
console.log(id=== secondId);

let const1 = 42342453353554242435n
console.log(const1);

//Non-primitive Data Types is also known as "Rreference" Data Types
  //Non- Primitive(Reference ) =>  Array, Object, Function

  let clgName= ["Rungta", "LNJPT", "NITP", "GPP7"]
  let myobj={
    name: "Milan",
    age: 32,
  }
console.log(myobj);
let myFunction= function () {
  console.log("Hello Milan");
}
console.log(typeof myFunction);
//Variables:
// var a = 10;
// var b = 20;
// console.log(a+b);

// var a = 10;
// console.log(a);
// a=30;
// console.log(a);
// a = 40;
// console.log(4);

// decleration of variable again and again:
// var a = 10;
// console.log(a+20);
// var a = 60;
// console.log('The Value of A will be now:', a);

//Let
// var b = 20;

// if(b = 20){
//     let c = 30;
//     console.log('C Has been Declared');
//     c = c + 10;
//     console.log('Updated Value of C is:', c);
//     var nme = "Shahnawaz";
// }

// console.log(nme); // this is present inside if condition but it will print as it is variable and global scope.
// console.log(c); // This will throw reference error as it is out of scope as it is let variable which is only local scope cannot be declared outside of if condition or code block.
// console.log(b); // This will print as it is global scope and variable

//Const:
// const a = 20;
// console.log(a);
// a = 10; // Cannot declare or reassign any other value to the const value as it is constant variable which cannot be modified.
// console.log(a);

// if (a = 10){
//     const hello = 'Shahnawaz Khan';
//     console.log(hello); // This we cannot redeclare as it is const value.
// }



//if a is greater than 10 print a is greater than 10;
// let e = 15;
// if (e>5){
//     console.log('A is Greater Than 5');
// }else{
//     console.log('A is less than 15');
// }

//Javascript if Condition:
let age = 55;
if (age > 18 ){
    console.log('This is Valid for Driving License');
}else{
    console.log('This Age is not valid for Driving License');
}
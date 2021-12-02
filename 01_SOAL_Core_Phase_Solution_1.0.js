// Question 1:-
// Create a function tjat accepts an array called 'myarray' as an argument, iterates through 'myarray', 
// and returns a new array which contains all the even number in 'myarray'.
// Sample input: [1,2,3,4,5,6,7,8]
// Sample output: [2,4,6,8]


// Sol:-

// Using forEach Method



function sort(a){
let b =[];
a.forEach((e)=>{
if(e%2==0){b.push(e);}
 }
 )
return b;
} 

var samp = [1,2,3,4,5,6,7,8];

sort(samp);



  
    
  

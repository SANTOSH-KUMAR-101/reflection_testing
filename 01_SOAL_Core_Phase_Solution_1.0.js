
// Question 1:-
// Create a function that accepts an array called 'myarray' as an argument, iterates through 'myarray', 
// and returns a new array which contains all the even number in 'myarray'.
// Sample input: [1,2,3,4,5,6,7,8] 
// Sample output: [2,4,6,8]  
 

// Sol:-  

//................................................ forEach Method ................................................... 

 

function sort(a){
let b =[];
a.forEach((e)=>{
if(e%2==0){b.push(e);}
 }
 )
return b;
} 

let samp = [1,2,3,4,5,6,7,8];

sort(samp);

//................................................ forEach Method ...................................................

// ........................................For Loop Solution..........................................................




function sorter(array) {
    var b = [];
    for (let i = 0; i < array.length; i++) {

        if (array[i] % 2 == 0) {

            b.push(array[i]);
        }
    }
    console.log(b);
    return b;

}

const myarray = [1, 3, 2, 2, 3, 4, 3, 2, 14];
sorter(myarray);









// ........................................For Loop Solution..........................................................

// ........................................................................................................................................................


// Question 2:- 
// Construct an object which contains a school's detail like cohort, mame, learners and address using a constructor function or a class.
 
//  Example of object:-
//  {
//     name: "name of school",
//     learners: ["Learner1", "Learner2","Learner3"],
//     address:"Mumbai";
//  } 
//  Create a method inside constructor function or class which prints the name of the school.

class school {
    constructor(p1,p2,p3,p4){
        this.cohort = p1;
        this.name = p2;
        this.learners = p3;
        this.address = p4;
    }
    
    print(){console.log(this.name);}

}

var b = new school("pavo","name of school",["Learner1", "Learner2","Learner3"],"Mumbai");
console.log(b);

// .................................................Functional Clas Constructors....................................................











// .................................................Functional Clas Constructors....................................................


// ......................................................................................................................................................................


// Question 3:-
// Consider the Code Below:
// setTimeout( ()=>{console.log("Time1")}, 3000)
// setTimeout( ()=>{console.log("Time2")}, 2000)
// setTimeout( ()=>{console.log("Time3")}, 1000)

//   Output of the above code is 
//   Time 3
//   Time 2
//   Time 1

//   Without updating the timings change the code using asynchronous methodlogies such that it prints the following output,
//   Time 1
//   Time 2
//   Time 3

const promise = new Promise((resolve, reject) => {
setTimeout(() => { console.log("Time1"); resolve(); }, 3000);
})

function time2() {
    setTimeout(() => { console.log("Time2"); }, 2000);
}
const promise2 = promise.then(time2);

function time3() {
    setTimeout(() => { console.log("Time3"); }, 3000);
}
Promise.allSettled([promise2]).then(time3);


// ........................................  Asyn Await ....................................................................










// ........................................  Asyn Await ....................................................................






//......................................... Callback Function ..............................................................










//......................................... Callback Function ...............................................................

//......................................... TESTING - UNIT TEST ...............................................................

// Question 4:-
// Write a test for a function that accepts an array and return all the even numbers in that array.
function sort(a){
let b =[];
a.forEach((e)=>{
if(e%2==0){b.push(e);}
 }
 )
return b;
} 

const sort = require('./module');

test('sorting array [1, 2, 3, 4, 5, 6, 7, 8] for even number to return [2, 4, 6, 8]', () => {
    expect(sort([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([2, 4, 6, 8]);
});


// ............................................................................................................................





//......................................... TESTING - UNIT TEST ...............................................................




<html>
  <head>
    <title>Appending Elements With the DOM and Ajax</title>
    <script language="javascript">
      function getData() {
        var XMLHttpRequestObject = false;
        if (window.XMLHttpRequest) {
          XMLHttpRequestObject = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
          XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
        }
        if (XMLHttpRequestObject) {
          XMLHttpRequestObject.open("GET", url);
          XMLHttpRequestObject.onreadystatechange = function () {
            if (
              XMLHttpRequestObject.readyState == 4 &&
              XMLHttpRequestObject.status == 200
            ) {
              decoded_string = JSON.parse(XMLHttpRequestObject.responseText);
              console.log(decoded_string);
              // console.log(decoded_string.length);
              for (let i = 0; i < decoded_string.length; i++) {
                let create_li = document.createElement("li");
                create_li.innerHTML = `Title: ${decoded_string[i].title} & Completed Status: ${decoded_string[i].completed} `;
                let div_catch = document.getElementById("list_box");
                div_catch.appendChild(create_li);
              }

              // var newPElement = document.createElement("li");
              // var newText = document.createTextNode(
              //   XMLHttpRequestObject.responseText
              // );
              // newPElement.appendChild(newText);
              // var divElement = document.getElementById("targetDiv");
              // divElement.appendChild(newPElement);
            }
          };
          XMLHttpRequestObject.send(null);
        }
      }
      const url = "https://jsonplaceholder.typicode.com/todos";
    </script>
  </head>
  <body>
    <h1>Appending Elements With the DOM and Ajax</h1>
    <form>
      <input type="button" value="Download the message" onclick="getData()" />
    </form>
    <div id="targetDiv" width="100" height="100">
      <p id="text"></p>
    </div>
    <div id="list_box"></div>
  </body>
</html>


    

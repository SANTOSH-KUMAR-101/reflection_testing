
// QUESTION NO. 3
// Construct an object which contains a school's detail like cohort, mame, learners and address 
//  using a constructor function or a class.
 
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

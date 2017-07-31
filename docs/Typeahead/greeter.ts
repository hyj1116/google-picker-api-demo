class Student{
    fullName:string;
    constructor(public firstName, public middleInitial, public lastName){
        this.fullName=firstName+" "+ middleInitial+" "+ lastName;
    }
}

interface Person{
    firstName:string;
    lastName:string;
}

function greeter(person:Person) {
    return "Hello, "+person.firstName+" "+person.lastName;
//    return "Hello, " + person;
}
var user=new Student("Jane","M.","User");
//var user={firstName:"Jane",lastName:"User"};
//var user=[0,1,2];
//var user = "Jane User";

document.body.innerHTML = greeter(user);
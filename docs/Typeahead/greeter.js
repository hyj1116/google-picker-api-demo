var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
    //    return "Hello, " + person;
}
var user = new Student("Jane", "M.", "User");
//var user={firstName:"Jane",lastName:"User"};
//var user=[0,1,2];
//var user = "Jane User";
document.body.innerHTML = greeter(user);

var Student = (function () {
    function Student(firstname, middleinitial, lastname) {
        this.firstname = firstname;
        this.middleinitial = middleinitial;
        this.lastname = lastname;
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
    return Student;
})();
function greeter(person) {
    return "Hello " + person.firstname + " " + person.lastname;
}
function greeterStudent(student) {
    return student.fullname;
}
var user = { firstname: "Eslem", lastname: "Alzate" };
var userStudent = new Student("Juan", "E.", "Alzate");
document.body.innerHTML = greeterStudent(userStudent);

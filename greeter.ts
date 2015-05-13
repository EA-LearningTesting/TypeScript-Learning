class Student{
	fullname:string;
	constructor(public firstname, public middleinitial, public lastname){
		this.fullname = firstname + " " + middleinitial + " " + lastname;
	}
}


interface Person{
	firstname:string;
	lastname:string;
}

function greeter(person : Person){
	return "Hello "+person.firstname+" "+person.lastname;
}

function greeterStudent(student:Student){
	return student.fullname;
}

var user = {firstname:"Eslem", lastname:"Alzate"};

var userStudent = new Student("Juan", "E.", "Alzate");

document.body.innerHTML= greeterStudent(userStudent);


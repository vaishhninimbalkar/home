function showObject() {
    var person = {
        firstName:"Jhon",
        lastName:"doe",
        age:30,
        fullName: function() {
            return this.firstName +" "+this.lastName;
        }
    };
    alert("Full Name:"+ person.fullName());
}
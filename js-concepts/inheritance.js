// function Person(name, dob, job) {
//   this.name = name;
//   this.dob = dob;
//   this.job = job;
// }

// Person.prototype.calAge = function() {
//     console.log(2020 - this.dob);
// }

// let john = new Person('john','1990','teacher');
// let jane = new Person('jane','1994','developer');

// console.log(john.calAge());
// console.log(jane.calAge());


const personProto = {
    calAge: function() {
      console.log(2020 - this.dob);
    }
  }
  
  const john = Object.create(personProto, {
    name: { value: 'john'},
    dob: { value: '1994'},
    job: { value: 'developer'}
  })
  
  console.log(john);
  console.log(john.calAge());
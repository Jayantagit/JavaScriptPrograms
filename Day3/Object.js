let person={

    "Name":"Jayanta",
    "Age":37,
    "Address":{
        "Area":"Dhakuria",
         "City":"Kolkata",
         "zip":700068
    },
    "Plot": ["p1","p2","p3"]
};

console.log(person);
console.log(person.Age);
console.log(typeof(person));
console.log(person.Address.zip);
console.log(person.Plot[2]);
console.log(person["Address"]["Area"]);
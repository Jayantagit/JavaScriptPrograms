let Person={
    name:"Jayanta",
    phone:[9999,1888],
    age:28,
    work :function ()
    {
        console.log("Testing");
    }
    ,
    address:{
        city:"Bang",
        country:"India"
    }

}

Person.status=false;
console.log(Person);
Person.name="Peter";
console.log(Person);
let skill={
    lang:["Java","JS"]
}
Person.skillset=skill;
console.log(Person);
console.log(Person.work());

let person={

    fname:"Cypress",
    lname:"Automation",

    teacher:{
        programs:["Selenium","API"]
    },

   fun1: function(num1)
    {
        console.log("nn"+num1);
    },
    fun2:(num2,num3)=>{
        console.log("nn"+num2 +num3);
    }
       
}
person.phone=[1,2,3,7]
person.location="Bangalore"
console.log(person);

person.fun1(10)

delete person.location
console.log(person);

person.fun2(10.78,10.12)

//for-in for Object,Array,String

for(let x in person) // key-value
{
    console.log(x);
    console.log((person[x]));

    if(x)
    {

    }
}

console.log(person.teacher)
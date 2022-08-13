class CarSample//Class is Blue Print with Properties and behaviour-Objects of the Class/Template to define its properties
{
    
    constructor(color,price)
    {
        this.color=color;
        this.price=price;
    }
     getPrice()
    {
        return this.price;

    }
    showDetails()
    {
        console.log("Detail value is"+this.color+":"+this.price);
    }

}
const c1=new CarSample("Green",1000);
const c2=new CarSample("Yellow",2000);
console.log(c1.color);
console.log(c1.getPrice());
console.log(c2.color);
//Using Class we can define multiple Objects.At the Time Of Object creation constructor construct the Objet
//ie helps to Define the Object
//Object is a collection of Properties and Behavior
c1.showDetails();

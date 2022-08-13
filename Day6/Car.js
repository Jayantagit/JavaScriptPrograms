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

}
const c1=new CarSample("Green",1000);
console.log(c1.color);
console.log(c1.getPrice());
//Using Class we can define multiple Objects.At the Time Of Object creation constructor construct the Objet
//Object is a collection of Properties and Behavior

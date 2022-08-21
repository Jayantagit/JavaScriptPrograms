class employee
{

    constructor(name,dept,location)
    {
        this.name=name;
        this.dept=dept;
        this.location=location;//This-Current Class Object

    }

    getDetails()
    {
        console.log(`Emp Details :${this.name}  : ${this.dept} :${this.location} `);
    }

    get empDetails()
    {
       return `${this.name} Details`;
    }

    set nameValue(name)
    {
        this.name=name;
    }
}

let emp1=new employee("an","IT","Kol");
emp1.getDetails();
emp1.nameValue="Jayanta";
let nameupd=emp1.empDetails;
console.log(nameupd)

class HR extends employee
{
    constructor(name,dept,location,leaves)
    {
        super(name,dept,location)
        this.leaves=leaves
        console.log("HR--Constructor"+leaves)
    }

}

let hr1=new HR("Kajal","HR","BangBangalore",10);
hr1.getDetails();

export {employee}
export {emp1}
class employeeDetails
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

//module.exports =c
export {employeeDetails}
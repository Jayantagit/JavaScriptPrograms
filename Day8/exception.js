//JavaScript everything is Error-Build In Object

try {

    let name=10
    console.log(name.toUpperCase())
    
} catch (err) {

   // throw "Dive by zero"
    console.log("Handle error..",err.name)
    
}
finally
{
    console.log("Finally")
}

console.log("FNext Steps")
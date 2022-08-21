try
{
    let num=6
    let result=manoj+1
    console.log(result)

}
catch(err)
{
    console.log(err.name)
   // throw "Please correcr Reference Type"
}

function checkMarks(n)
{
    if(n<10)
    {
       // throw new RangeError("Correvt number")
       throw "num should be >0"
    }
    return n

}

console.log(checkMarks(6))

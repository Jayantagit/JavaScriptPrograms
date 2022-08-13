
function add(value)
{
    console.log(value);
}
//Function as argument...
function show(a,b,callback)
{
    let result=a+b;
    console.log(result);
    callback(result);
}

show(10,20,add);

console.log("===========================");

let arr=[1,2,4,8];
arr.forEach(function(num)
{
    console.log(num);
}

)

console.log("===========================");

arr.forEach((nm)=>
{
    console.log(nm);

}
)
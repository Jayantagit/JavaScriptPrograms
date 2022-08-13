let x=[10,20,29,90]

for(let key of x)
{
    console.log(key)
}

console.log("===========")

for(let key in x)//in -Index with Array and with Object return key
{
    console.log(key)
    console.log(x[key])
}

console.log("===========")
const f3=(num1,num2)=>{

    console.log(num1+":="+num2)
}
f3(10,29)
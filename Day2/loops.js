for(let n=0;n<=2;n++)
{
    for(let m=0;m<=2;m++)
    {
        console.log(m+" "+n);
    }
}

console.log("=================");
let num=0;
while(num<10)
{
    if(num==6)
     break;
    console.log("==="+num);
    num++;
}

console.log("=================");
let num1=0;
while(num1<10)
{
    num1++;
    if(num1==6)
    {
       continue;
    }
    console.log("==="+num1);
    
}
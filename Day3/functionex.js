function EMICalc(interset)
{
    console.log("Calculate EMI based on",interset);
}

function EMI(interset,val)
{
    console.log("Calculate EMI based on",interset,val);
    return 100.89;
}

console.log("============================");
EMICalc(10.90);

let val=EMI(10,10);
console.log(val);
console.log("============================");
let x=()=>{
    console.log("Anonymous--");
};
x();
console.log("============================");

function EMIArgs(interset,...val)
{
    console.log("Calculate EMI based on",interset,val);
   
}
EMIArgs(17.78,10,20,30);

console.log("============================");

let result=function(a=0,b=0){
    console.log("Anonymous--"+a+b);
};
result(12);
console.log("============================");

let res=()=>{
    console.log("Anonymous--Lamba");
};

res();
console.log("============================");
let bb=()=>console.log("value...");
bb();


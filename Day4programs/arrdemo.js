let arr=[10,45,89,90];
console.log(arr[2]);
arr.push(100);
arr.push(289);
console.log(arr);
arr.pop();
console.log(arr);
arr[0]=110;
console.log(arr);
arr.shift();
console.log(arr);

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

arr.splice(1,1);
console.log(arr);

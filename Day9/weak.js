let s=new WeakSet();//Only object
let obj1={
    location:"Kol"
}
s.add(obj1)
console.log(s);

let map=new WeakMap();
map.set(obj1,"AddressDetails");//Key has to be Object Only
console.log(map);
console.log(map.get(obj1));
let s1=new Set()
s1.add(10)
s1.add(20)
s1.add(true)

console.log(s1);

s1.delete(10)

console.log(s1);
console.log(s1.size);
console.log(s1.has(true));

console.log("===================");

let map1=new Map()
map1.set("name","jay")
map1.set("company","CGI")
map1.set("phone",[145678,19086])
map1.set("addr",{
    location:"Kol",
    chice:"Pet"

})
console.log(map1);
let val=map1.get("name")
console.log(val);
console.log("==================");

map1.forEach(function mapVal(x,y) {

    console.log(x+"="+y);
    
})

console.log("==================");

for (let [x,y] of map1) {
    console.log(x+":"+y);
}

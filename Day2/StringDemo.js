let str="I do Coding"
console.log(str.charAt(2));
console.log(str.length);
console.log(str.includes("Coding"));
console.log(str.replace("do","love"));
console.log(str.substring(2));

console.log("=================n");

let lang="Java;Python;Ruby";
const val=lang.split(";");
console.log(val[2]);
console.log(lang.split(";")[0]);

console.log("=================n");
let str1="hello java";
let str2="hello java";
console.log(str1.localeCompare(str2));
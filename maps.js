var mymap = new Map();

mymap.set(1,"uno");
mymap.set(2,"bi");
mymap.set(3,"tri");
mymap.set(4,"quatro");

console.log(mymap);


for(let key of mymap.keys()){
    console.log(`keys are ${key}`);
}

for(let value of mymap.values()){
    console.log(`values are ${value}`);
}

for(let [value,key] of mymap){
    console.log(`keys are ${key} and values are ${value}`);
}

mymap.forEach((v,k)=>console.log(`${v} and key is${k}`);)
const names=["youtube","facebook","instagram","amazon","netfix"];
// names.forEach((a)=>(console.log(a)))
// for(const n of names) {
//     console.log(n);

// }

const symbols = {
    yt: "youtube",
    ig: "instagram",
    fb: "facebook",
    nn: "netflix",
};

for(const n in symbols) {
    console.log(symbols[n]);
    console.log(`the key is: ${n} and the value is ${symbols[n]}`);
}
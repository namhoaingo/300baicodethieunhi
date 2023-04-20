
const x = function(...x){
    let k = (typeof x).length;
    console.log(typeof x);
    let y = () => "freetut".length;
    console.log(y);
    let z = {y: y};
    return k - z.y();
}

console.log(Boolean(x()))
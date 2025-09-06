function magic() {
    return x = 1 , [],{};
}
const ans = magic();
console.log(typeof ans);
// yaha par hume console me hume empty object dekhne ko milega kyoki expression ka execution left to right hota hai to jo bhi last me hoga wo return hoga 
// [1,2,3].map(function magicFn(num) {
//     return num*num;
// })
// magicFn();

const YT = "FrontendMaster";
const IG = "ALLahabadi.dev";
const result = IG && YT;
console.log(result);  
 
// note -> && by default does not convert resultto boolean
// && checks values from left right
// && checks values form left to right

const obj = {a:'JS'};
const {a,a:b,b:c} = obj;
// add a comment





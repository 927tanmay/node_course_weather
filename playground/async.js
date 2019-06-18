console.log("Starting app");

setTimeout(() => {
console.log("middle");},
2000);

setTimeout(() => {
    console.log("Zero Timeout");},
    0);

console.log("Ending");
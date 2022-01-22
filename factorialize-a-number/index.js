
// Find the factorial number with Recursion 
const factorialize = num => num <= 1 ? 1 : num * factorialize(num - 1);
   

const fiveFactoraial = factorialize(5);

console.log({fiveFactoraial})
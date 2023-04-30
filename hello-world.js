function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function helloWorld(name) {
  return "Hello " + capitalize(name);
}

console.log(helloWorld("world"));
console.log(helloWorld("node.js"));
console.log(helloWorld("javascript"));

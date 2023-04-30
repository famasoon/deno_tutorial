function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function helloWorld(name: string): string {
  return `Hello ${capitalize(name)}`;
}

console.log(helloWorld("world"));
console.log(helloWorld("deno"));
console.log(helloWorld("typescript"));
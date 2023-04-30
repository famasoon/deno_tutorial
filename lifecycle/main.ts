import "./imported.ts";

const handler = (e: Event): void => {
  console.log(`got ${e.type} event in main.ts}`);
}

window.addEventListener('load', handler);
window.addEventListener('unload', handler);

window.onload = (e: Event): void => {
  console.log(`got ${e.type} event in onload functino with main.ts}`);
}

window.onunload = (e: Event): void => {
  console.log(`got ${e.type} event in onunload functino with main.ts}`);
}

console.log('main.ts loaded');
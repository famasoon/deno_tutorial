const handler = (e: Event): void => {
  console.log(`got ${e.type} event in imported.ts}`);
}

window.addEventListener('load', handler);
window.addEventListener('unload', handler);

window.onload = (e: Event): void => {
  console.log(`got ${e.type} event in onload functino with imported.ts}`);
}

window.onunload = (e: Event): void => {
  console.log(`got ${e.type} event in onunload functino with imported.ts}`);
}

console.log('imported.ts loaded');
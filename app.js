const field = document.querySelector('#comets');
for (let i = 0; i < 16; i++) {
  const comet = document.createElement('i');
  comet.className = 'comet';
  comet.style.cssText = `--x:${(i * 29 % 140) - 30}%;--y:${20 + (i * 23 % 115)}%;--length:${100 + i * 17 % 170}px;--duration:${7 + i % 5 * 1.3}s;--delay:${-i * 1.81}s`;
  field.append(comet);
}

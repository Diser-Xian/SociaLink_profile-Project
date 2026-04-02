const menu = document.querySelector('._links');
const links = menu.querySelectorAll('a');

let index = 0;

links[index].focus();

menu.addEventListener('keydown', (e) => {
  if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;

  if (e.key === 'ArrowDown') {
    index = (index + 1) % links.length;
  }

  if (e.key === 'ArrowUp') {
    index = (index - 1 + links.length) % links.length;
  }

  links[index].focus();
  e.preventDefault(); 
});


// this codes is from AI, 
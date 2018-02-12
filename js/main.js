const card = document.querySelector('.card');
const instruction = document.querySelector('.instruction');

function toggle(event) {
  event.preventDefault();
  instruction.classList.add('touched');
  card.classList.toggle('open');
}

window.addEventListener('click', toggle);
window.addEventListener('touchstart', toggle);


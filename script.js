// 1ª Digitação (JS Completo)
const menuIcon = document.querySelector('#menu-icon');
const navList = document.querySelector('.navlist');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navList.classList.toggle('open');

  // Bloquear scroll quando menu aberto 
  document.body.style.overflow = navList.classList.contains('open') ? 'hidden' : 'auto'
});


let bar = document.querySelector('.bar');
let ul = document.querySelector('#header .container .nav-bar .nav-list ul');
let header = document.querySelector('section#header');

bar.addEventListener('click', () => {
  ul.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
        header.style.backgroundColor = '#29323c'
    } else {
        header.style.backgroundColor = 'transparent'
    }
});

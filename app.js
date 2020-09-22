let bar = document.querySelector('.bar');
let ul = document.querySelector('#header .container .nav-bar .nav-list ul')
bar.addEventListener('click', () => {
    ul.classList.toggle('active')
});

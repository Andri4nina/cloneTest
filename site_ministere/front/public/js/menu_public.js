let menuIcons = document.querySelector('.menu-icons')
nav =document.querySelector('nav')


menuIcons.addEventListener('click' , ()=>{
    nav.classList.toggle('active')
})
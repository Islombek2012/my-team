const bars = document.querySelector('.bars');
const resNav = document.querySelector('.menu');
bars.addEventListener('click', ()=>{
      resNav.classList.toggle('active')
      bars.classList.toggle('active')
})
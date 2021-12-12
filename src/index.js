//import './css/style.scss';
import slider from './slider.js'
slider();
const formBell = document.querySelector('.form-bell');
formBell.addEventListener('click',()=>{
  formBell.classList.toggle('true')
})
//import './css/style.scss';
import slider from './slider.js'
slider();



const buttonStart = document.querySelector('.button-start')
const mainTitle = document.querySelector('.main-title')
const wrapperBlock = document.querySelector('.wrapper')
const containerBlock = document.querySelector('.container')
buttonStart.addEventListener('click',()=>{
  
  buttonStart.classList.toggle('hide')
  mainTitle.classList.toggle('hide')
  containerBlock.style.display = 'block'
  containerBlock.style.display = 'block'
  wrapperBlock.style.display = 'flex'
  containerBlock.style.backgroundColor = '#192f2d'
})